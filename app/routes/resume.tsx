import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import { usePuterStore } from "~/lib/puter";
import { motion } from "framer-motion";
import ScoreGauge from "~/components/OverallScore";
import { CloudUpload } from "lucide-react";

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
      console.log(data);

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
      console.log({ resumeUrl, imageUrl, feedback: data.feedback });
    };

    loadResume();
  }, [id]);

  return (
    <div className="flex h-screen justify-around overflow-hidden">
      {feedback ? (
        <>
          <div className="w-90 flex-shrink-0">
            <div className="p-6 bg-gradient-to-r from-[#ffffff] to-[#8bcff1] text-white h-full">
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
                  <ScoreGauge score={feedback?.overallScore!} />
                  <h2 className="text-2xl font-bold mb-8 text-center">
                    Your Scores
                  </h2>
                </div>
              </motion.div>
              <div className="space-y-6">
                <Summary feedback={feedback!} />
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 bg-gray-50 min-h-screen">
              <div className="flex justify-end">
                <Link
                  to="/upload"
                  className="primary-button bg-gradient-to-r from-[#3D84A8] to-[#2d6783] w-fit rounded-lg"
                >
                  <p className="text-base font-medium">
                    New Upload <CloudUpload className="inline pl-1" />
                  </p>
                </Link>
              </div>
              <div className="gradient-border p-8 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="my-5"
                >
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">
                    Detailed insights and analysis
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
                    <div className="animate-in fade-in duration-1000 gradient-border p-8  max-sm:m-0 h-[90%] max-xl:h-fit w-fit">
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
        <img src="/images/resume-scan-2.gif" alt="scan" className="w-auto" />
      )}
    </div>

    // <div className="!pt-0">
    //   <nav className="resume-nav">
    //     <Link to="/resumes" className="back-button">
    //       <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
    //       <span className="text-gray-800 text-sm font-semibold">Back</span>
    //     </Link>
    //   </nav>
    //   <div className="flex flex-row w-full max-lg:flex-col-reverse">
    //     <section className="feedback-section bg-[url('/images/bg-small.svg') bg-cover h-[100vh] sticky top-0 items-center justify-center">
    //       {imageUrl && resumeUrl && (
    //         <div className="animate-in fade-in duration-1000 gradient-border  max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
    //           <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
    //             <img
    //               src={imageUrl}
    //               className="w-full h-full object-contain rounded-2xl"
    //               title="resume"
    //             />
    //           </a>
    //         </div>
    //       )}
    //     </section>
    //     <section className="feedback-section">
    //       <h2 className="text-2xl text-black font-bold">Resume Review</h2>
    //       {feedback ? (
    //         <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
    //           <Summary feedback={feedback} />
    //           <ATS
    //             score={feedback.ATS.score || 0}
    //             suggestions={feedback.ATS.tips || []}
    //           />
    //           <Details feedback={feedback} />
    //         </div>
    //       ) : (
    //         <img
    //           src="/images/resume-scan-2.gif"
    //           alt="scan"
    //           className="w-full"
    //         />
    //       )}
    //     </section>
    //   </div>
    // </div>
  );
};

export default Resume;
