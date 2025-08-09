import Navbar from "~/components/Navbar";
import { useEffect, useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate, useLocation } from "react-router";
import { convertPdfToImage } from "~/lib/pdf2img";
import { generateUUID } from "~/lib/utils";
import { prepareInstructions } from "~/constants";

const Upload = () => {
  const { ai, kv, fs, auth } = usePuterStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pendingAnalysis, setPendingAnalysis] = useState<{
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  } | null>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
  });

  useEffect(() => {
    if (auth.isAuthenticated) {
      const storedAnalysis = localStorage.getItem("pendingAnalysis");
      const storedFile = localStorage.getItem("pendingFile");

      if (storedAnalysis && storedFile) {
        const analysisData = JSON.parse(storedAnalysis);

        // Reconstruct file from base64
        fetch(storedFile)
          .then((res) => res.blob())
          .then((blob) => {
            const reconstructedFile = new File([blob], analysisData.fileName, {
              type: analysisData.fileType,
            });

            // Auto-trigger analysis
            handleAnalyzeResume({
              companyName: analysisData.companyName,
              jobTitle: analysisData.jobTitle,
              jobDescription: analysisData.jobDescription,
              file: reconstructedFile,
            });

            // Clear localStorage
            localStorage.removeItem("pendingAnalysis");
            localStorage.removeItem("pendingFile");
          });
      } else if (pendingAnalysis) {
        // Fallback to state-based approach
        handleAnalyzeResume(pendingAnalysis);
        setPendingAnalysis(null);
      }
    }

    // Load form data on component mount
    const storedAnalysis = localStorage.getItem("pendingAnalysis");
    if (storedAnalysis && !auth.isAuthenticated) {
      const data = JSON.parse(storedAnalysis);
      setFormData({
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        jobDescription: data.jobDescription,
      });
    }
  }, [auth.isAuthenticated, pendingAnalysis]);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyzeResume = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  }) => {
    setIsProcessing(true);
    setStatusText("Uploading the file...");
    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile)
      return setStatusText("Failed to upload the file. Please try again.");
    setStatusText("Converting to image...");
    const imageFile = await convertPdfToImage(file);
    if (!imageFile.file)
      return setStatusText("Error: Failed to convert PDF to image.");
    setStatusText("Uploading image...");
    const uploadedImage = await fs.upload([imageFile.file]);
    if (!uploadedImage)
      return setStatusText("Failed to upload the image. Please try again.");
    setStatusText("Preparing data...");
    const uuid = generateUUID();
    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText("Analyzing resume...");

    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription })
    );

    if (!feedback)
      return setStatusText("Failed to analyze the resume. Please try again.");

    const feedbackText =
      typeof feedback.message.content === "string"
        ? feedback.message.content
        : feedback.message.content[0].text;

    data.feedback = JSON.parse(feedbackText);

    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText("Analysis complete! Redirecting...");
    navigate(`/resume/${uuid}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);

    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;
    if (!file) return;

    const analysisData = { companyName, jobTitle, jobDescription, file };

    if (!auth.isAuthenticated) {
      localStorage.setItem(
        "pendingAnalysis",
        JSON.stringify({
          companyName,
          jobTitle,
          jobDescription,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
        })
      );
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("pendingFile", reader.result as string);
        setStatusText("Authentication required. Redirecting...");
        navigate("/auth?next=" + encodeURIComponent(location.pathname));
      };
      reader.readAsDataURL(file);
      return;
    }
    handleAnalyzeResume(analysisData);
  };

  return (
    <main className="aurora-container bg-cover bg-center bg-no-repeat">
      <div className="aurora-layer aurora-1"></div>
      <div className="aurora-layer aurora-2"></div>
      <div className="aurora-layer aurora-3"></div>
      <div className="aurora-layer aurora-4"></div>
      <div className="aurora-layer aurora-5"></div>
      <div className="aurora-layer aurora-6"></div>
      <div className="aurora-layer aurora-7"></div>
      <Navbar buttonText={"Upload Resume"} iconName="upload" />
      <section className="main-section z-10">
        <div className="page-heading py-12">
          <h1>AI Powered Feedback For Your Dream Job</h1>
          {isProcessing ? (
            <>
              <h3 className="text-xl text-gray-600">{statusText}</h3>
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h3 className="text-xl text-gray-600">
              Upload your resume to get started!
            </h3>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="Company Name"
                  defaultValue={formData.companyName}
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="Job Title"
                  defaultValue={formData.jobTitle}
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description">Job Description*</label>
                <textarea
                  rows={5}
                  id="job-description"
                  name="job-description"
                  placeholder="Job Description"
                  required
                  defaultValue={formData.jobDescription}
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>
              <button
                type="submit"
                className="primary-button font-bold"
                disabled={!file}
              >
                {auth.isAuthenticated
                  ? "Analyze Resume"
                  : "Sign In & Analyze Resume"}
              </button>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 w-full">
                <p className="text-sm text-blue-800">
                  To use this application, you'll need a{" "}
                  <a href="/auth">
                    <span className="font-bold">Puter</span>
                  </a>{" "}
                  account. We integrate with{" "}
                  <span className="font-bold">Puter AI</span> to power our
                  features.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
