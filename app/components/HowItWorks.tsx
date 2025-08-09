"use client";
import { motion } from "framer-motion";
import { FileText, UploadCloud, BrainCircuit, BarChart2 } from "lucide-react";

const steps = [
  {
    title: "Add Job Details",
    description: "Enter job title, company, and paste the job description.",
    icon: FileText,
  },
  {
    title: "Upload Resume (PDF)",
    description: "Upload your current resume — just drag and drop.",
    icon: UploadCloud,
  },
  {
    title: "AI-Powered Analysis",
    description:
      "Our engine compares your resume to the job and runs ATS and content analysis.",
    icon: BrainCircuit,
  },
  {
    title: "Get Your Report",
    description: "Instantly receive your ATS score and personalized feedback.",
    icon: BarChart2,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It Works –{" "}
            <span className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] bg-clip-text text-transparent">
              Fast, Accurate, Targeted
            </span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded"></div>

          <div className="space-y-24 mt-24">
            {steps.map((step, index) => {
              const isRight = index % 2 === 0;
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      isRight ? "md:ml-auto md:pl-6" : "md:mr-auto md:pr-6"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className="p-2 rounded-full w-8 h-8 text-white flex items-center justify-center text-sm font-bold"
                          style={{ backgroundColor: "#3D84A8" }}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div
                      className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: "#3D84A8" }}
                    >
                      <StepIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
