import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ATSPreviewSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-sm text-gray-600 uppercase tracking-wide">
            Resume Analysis & Insights
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
            Get Your{" "}
            <span className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] bg-clip-text text-transparent">
              ATS Compatibility Score
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Our AI-powered analysis simulates how Applicant Tracking Systems
            (ATS) read your resume, helping you understand how well it matches
            the job requirements.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span>
                <Check color="#3d84a8" />
              </span>{" "}
              ATS Compatibility Score
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check color="#3d84a8" />
              </span>{" "}
              Job-Relevance Check
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check color="#3d84a8" />
              </span>{" "}
              Skills Match Report
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check color="#3d84a8" />
              </span>{" "}
              Tone & Style Analysis
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check color="#3d84a8" />
              </span>{" "}
              Content & Structure Suggestions
            </li>
          </ul>
        </motion.div>

        {/* Right Preview Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="/images/preview-ats.png"
            alt="ATS Dashboard Preview"
            className="w-full max-w-2xl "
          />
        </motion.div>
      </div>
    </section>
  );
}
