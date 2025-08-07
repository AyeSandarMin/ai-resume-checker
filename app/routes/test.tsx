import React from "react";
import { motion } from "framer-motion";

const ScoreChart = () => {
  // Sample score data
  const scores = [
    { label: "Performance", value: 85, color: "bg-blue-500" },
    { label: "Quality", value: 92, color: "bg-green-500" },
    { label: "Efficiency", value: 78, color: "bg-yellow-500" },
    { label: "Innovation", value: 88, color: "bg-purple-500" },
    { label: "Teamwork", value: 95, color: "bg-pink-500" },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-[#ffffff] to-[#8bcff1] text-white h-full">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Your Resume Scores
      </h2>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 flex flex-col items-center"
      >
        <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">87.6</div>
              <div className="text-xs text-gray-400">Overall</div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="space-y-6">
        {scores.map((score, index) => (
          <motion.div
            key={score.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{score.label}</span>
              <span className="text-sm font-bold">{score.value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className={`h-3 rounded-full ${score.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${score.value}%` }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const InformationPanel = () => {
  // Sample data for demonstration
  const sections = [
    {
      title: "Project Overview",
      content:
        "This comprehensive analysis covers the key performance indicators and metrics that drive our organizational success. The data presented reflects quarterly assessments across multiple departments and business units.",
    },
    {
      title: "Performance Analysis",
      content:
        "Our performance metrics show significant improvement across all measured categories. The team has consistently exceeded targets in quality delivery, with a notable 15% increase in efficiency ratings compared to the previous quarter.",
    },
    {
      title: "Quality Metrics",
      content:
        "Quality assurance processes have been strengthened, resulting in a 92% quality score. This improvement is attributed to enhanced training programs and implementation of new quality control measures throughout the development lifecycle.",
    },
    {
      title: "Efficiency Improvements",
      content:
        "Process optimization initiatives have yielded substantial efficiency gains. Automated workflows and streamlined communication channels have reduced project completion times by an average of 22%.",
    },
    {
      title: "Innovation Index",
      content:
        "Our innovation score reflects the team's commitment to creative problem-solving and technological advancement. Recent initiatives include the adoption of cutting-edge development frameworks and implementation of AI-assisted tools.",
    },
    {
      title: "Team Collaboration",
      content:
        "Teamwork metrics demonstrate exceptional collaborative spirit. Cross-functional partnerships have strengthened, leading to more integrated solutions and improved knowledge sharing across departments.",
    },
    {
      title: "Future Projections",
      content:
        "Based on current trends and implemented improvements, we project continued growth across all performance categories. Strategic initiatives for the next quarter focus on sustainability and scalability.",
    },
    {
      title: "Recommendations",
      content:
        "Key recommendations include continued investment in team development, expansion of automation capabilities, and enhancement of customer feedback integration processes.",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Performance Dashboard
        </h1>
        <p className="text-gray-600 mb-8">Detailed insights and analysis</p>
      </motion.div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>

            {/* Sample charts/data visualization */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
                <div className="text-sm text-blue-600 font-medium">
                  Metric A
                </div>
                <div className="text-2xl font-bold text-blue-800">
                  {Math.floor(Math.random() * 100) + 50}
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
                <div className="text-sm text-green-600 font-medium">
                  Metric B
                </div>
                <div className="text-2xl font-bold text-green-800">
                  {Math.floor(Math.random() * 100) + 60}
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
                <div className="text-sm text-purple-600 font-medium">
                  Metric C
                </div>
                <div className="text-2xl font-bold text-purple-800">
                  {Math.floor(Math.random() * 100) + 70}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Additional content to demonstrate scrolling */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-8 mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">Summary</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            This dashboard provides a comprehensive overview of our performance
            metrics and key insights. The fixed sidebar chart allows for quick
            reference while browsing through detailed information sections.
            Continue scrolling to explore more data and insights.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Fixed Left Sidebar */}
      <div className="w-90 flex-shrink-0">
        <ScoreChart />
      </div>

      {/* Scrollable Right Content */}
      <div className="flex-1 overflow-y-auto">
        <InformationPanel />
      </div>
    </div>
  );
}
