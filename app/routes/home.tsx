import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { usePuterStore } from "~/lib/puter";
import { useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";
import Highlights from "~/components/Highlights";
import { motion } from "framer-motion";
import HowItWorksSection from "~/components/HowItWorks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumax" },
    {
      name: "description",
      content: "AI powered feedback to help you reach your dream job!",
    },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const laodResume = async () => {
      setLoadingResumes(true);
      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume
      );

      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };
    laodResume();
  }, []);

  return (
    <main className="aurora-container bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className="aurora-layer aurora-1"></div>
      <div className="aurora-layer aurora-2"></div>
      <div className="aurora-layer aurora-3"></div>
      <div className="aurora-layer aurora-4"></div>
      <div className="aurora-layer aurora-5"></div>
      <div className="aurora-layer aurora-6"></div>
      <div className="aurora-layer aurora-7"></div>
      <Navbar buttonText={"Get Started"} />
      <section className="main-section z-10 relative">
        <div className="page-heading py-5 px-8 flex flex-row justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-left">
                AI-Powered Resume Checker:
                <br />
                for Job Matching & ATS Success
              </h1>
              {/* {!loadingResumes && resumes.length === 0 ? (
            <h2>No resume found. Please upload your resume to get feedback.</h2>
          ) : (
            <h2>Review your submissions and checked AI powered feedback.</h2>
          )} */}
              <p className="text-left max-w-lg text-lg pt-3">
                Upload your resume and job description. Our AI analyzes
                alignment, ATS readiness, tone, structure, and skills — helping
                you stand out and land interviews.
              </p>
              <div className="flex flex-col justify-center mt-6 gap-4">
                <Link
                  to="/upload"
                  className="primary-button w-fit text-lg rounded-lg font-semibold z-10"
                >
                  Upload Resume
                </Link>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/images/hero-img.png"
                alt="banner-img"
                className="max-w-[600px]"
              />
            </motion.div>
          </div>
        </div>
        <Highlights />
        <HowItWorksSection/>
      </section>
    </main>
  );
}
