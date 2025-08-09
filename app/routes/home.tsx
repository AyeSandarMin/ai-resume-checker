import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { Link } from "react-router";
import Highlights from "~/components/Highlights";
import { motion } from "framer-motion";
import HowItWorksSection from "~/components/HowItWorks";
import Footer from "~/components/Footer";
import { CloudUpload } from "lucide-react";
import FeaturesSection from "~/components/Features";
import ATSPreviewSection from "~/components/Preview";

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
  return (
    <main className="aurora-container bg-cover bg-center bg-no-repeat overflow-x-hidden">
      <div className="aurora-layer aurora-1"></div>
      <div className="aurora-layer aurora-2"></div>
      <div className="aurora-layer aurora-3"></div>
      <div className="aurora-layer aurora-4"></div>
      <div className="aurora-layer aurora-5"></div>
      <div className="aurora-layer aurora-6"></div>
      <div className="aurora-layer aurora-7"></div>
      <Navbar buttonText={"Get Started"} iconName="right-arrow" />
      <section className="main-section z-10 relative">
        <div className="page-heading py-5 px-8 flex flex-row justify-between max-[992px]:flex-col">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-left text-gray-900 text-5xl">
                AI-Powered Resume Checker:
                <br />
                for Job Matching & ATS Success — Built with Puter.js
              </h1>
              <p className="text-left max-w-lg text-base pt-3">
                Upload your resume and job description, and watch our AI in
                action. Implemented with Puter.js, this tool analyzes alignment,
                ATS readiness, tone, structure, and skills — helping you stand
                out and land interviews.
              </p>
              <div className="flex flex-col justify-center mt-6 gap-4">
                <Link
                  to="/upload"
                  className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit z-10"
                >
                  Upload Resume{" "}
                  <CloudUpload className="inline pl-1 mt-[-2px]" />
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
        <HowItWorksSection />
        <FeaturesSection />
        <ATSPreviewSection />
      </section>
      <Footer />
    </main>
  );
}
