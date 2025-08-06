import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate, Link } from "react-router";
import { useEffect, useState } from "react";

export function meta() {
  return [
    { title: "Resumax" },
    {
      name: "description",
      content: "AI powered feedback to help you reach your dream job!",
    },
  ];
}

export default function Resumes() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  // useEffect(() => {
  //   if (!auth.isAuthenticated) navigate("/auth?next=/");
  // }, [auth.isAuthenticated]);

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
      <Navbar buttonText={"Upload Resume"}/>
      <section className="main-section z-10 relative">
        <div className="page-heading py-5 px-8 flex flex-col justify-between">
          <h1 className="text-left">
            AI-Powered Resume Checker:
            <br />
            for Job Matching & ATS Success
          </h1>
          {!loadingResumes && resumes.length === 0 ? (
            <h2>No resume found. Please upload your resume to get feedback.</h2>
          ) : (
            <h2>Review your submissions and checked AI powered feedback.</h2>
          )}
        </div>
        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img src="/images/resume-scan-2.gif" className="w-[200px]" />
          </div>
        )}
        {!loadingResumes && resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col justify-center items-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-lg rounded-lg font-semibold z-10"
            >
              Upload Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
