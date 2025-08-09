import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import { usePuterStore } from "~/lib/puter";
import { motion } from "framer-motion";
import OverallScore from "~/components/OverallScore";
import { CloudUpload } from "lucide-react";
import Skeleton from "~/components/Skeleton";

export const meta = () => [
  { title: "Resumax - Review" },
  {
    name: "description",
    content: "Detailed feedback of your resume",
  },
];

const Resume = () => {
  const { auth, isLoading, fs, kv } = usePuterStore();
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated)
      navigate(`/auth?next=/resume${id}`);
  }, [isLoading]);

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);

      if (!resume) return;

      const data = JSON.parse(resume);

      const resumeBlob = await fs.read(data.resumePath);
      if (!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], { type: "application/pdf" });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlob = await fs.read(data.imagePath);
      if (!imageBlob) return;
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageUrl);

      setFeedback(data.feedback);
    };

    loadResume();
  }, [id]);

  return (
    <div className="flex md:flex-row flex-col h-screen md:justify-around md:overflow-hidden">
      {feedback ? (
        <>
          <div className="md:w-90 w-full md:flex-shrink-0">
            <div className="p-6 bg-gradient-to-r from-[#ffffff] to-[#3d84a8] text-white md:h-full min-h-fit">
              <div className="pb-4">
                <Link to="/">
                  <p className="text-2xl font-bold text-gradient">
                    <img
                      src="/resumax-logo.png"
                      alt="Logo"
                      className="w-30 h-7"
                    />
                  </p>
                </Link>
              </div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 flex flex-col items-center"
              >
                <div className="text-center">
                  <OverallScore score={feedback?.overallScore!} />
                  <h3 className="text-2xl font-bold mb-8 pt-4 text-center text-gray-900">
                    Your Resume Score
                  </h3>
                </div>
              </motion.div>
              <div className="space-y-6">
                <Summary feedback={feedback!} />
              </div>
            </div>
          </div>
          <div className="flex-1 md:overflow-y-auto overflow-visible">
            <nav className="resume-nav">
              <Link to="/resumes" className="back-button">
                <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
                <span className="text-gray-800 text-sm font-semibold">
                  Back
                </span>
              </Link>
              <Link to="/upload" className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit z-10">
                  <p className="text-base font-medium">
                    New Upload <CloudUpload className="inline pl-1" />
                  </p>
                </Link>
            </nav>
            <div className="p-6 bg-gray-50 md:min-h-screen min-h-fit">
              <div className="gradient-border p-8 mt-4 shadow-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="my-5"
                >
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">
                    Resume Analysis & Insights
                  </h3>
                </motion.div>
                <div className="space-y-8">
                  <ATS
                    score={feedback?.ATS.score || 0}
                    suggestions={feedback?.ATS.tips || []}
                  />
                  <Details feedback={feedback!} />
                </div>
                <section className="feedback-section items-center justify-center">
                  {imageUrl && resumeUrl && (
                    <div className="animate-in fade-in duration-1000 gradient-border p-8 max-sm:m-0 md:h-[90%] max-xl:h-fit w-fit">
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={imageUrl}
                          className="w-full h-full object-contain rounded-2xl"
                          title="resume"
                        />
                      </a>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Resume;
