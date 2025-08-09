import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  Bot,
  Target,
  Zap,
  FileText,
  Settings,
  CheckCircle,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay: number;
}

const features: Feature[] = [
  {
    id: "ats-score",
    title: "ATS Compatibility Score",
    description:
      "Simulates how applicant tracking systems will read your resume.",
    icon: <Bot className="w-6 h-6" />,
    gradient: "from-red-500 to-pink-500",
    delay: 0.1,
  },
  {
    id: "job-relevance",
    title: "Job-Relevance Check",
    description:
      "Measures how well your resume matches the role's responsibilities.",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2,
  },
  {
    id: "skills-match",
    title: "Skills Match Report",
    description: "Detects missing or weakly mentioned required skills.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.3,
  },
  {
    id: "tone-analysis",
    title: "Tone & Style Analysis",
    description: "Checks for clarity, professionalism, and tone fit.",
    icon: <FileText className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    delay: 0.4,
  },
  {
    id: "content-suggestions",
    title: "Content & Structure Suggestions",
    description:
      "Optimizes format, sections, and content flow for better impact.",
    icon: <Settings className="w-6 h-6" />,
    gradient: "from-purple-500 to-indigo-500",
    delay: 0.5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
        initial={false}
        animate={{ rotate: index * 45 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Icon container */}
      <motion.div
        className={`w-10 h-10 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {feature.icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors"
          layoutId={`title-${feature.id}`}
        >
          {feature.title}
        </motion.h3>

        <motion.p
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {feature.description}
        </motion.p>
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: -180 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <CheckCircle className="w-5 h-5 text-green-500" />
      </motion.div>

      {/* Subtle animation dots */}
      <div className="absolute -top-2 -right-2 w-20 h-20 opacity-5">
        <motion.div
          className={`w-full h-full rounded-full bg-gradient-to-r ${feature.gradient}`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: feature.delay }}
        />
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Powerful Resume{" "}
            <span className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] bg-clip-text text-transparent">
              Analysis
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-gray-600 max-w-3xl mx-auto"
          >
            Get comprehensive insights to optimize your resume for success. Our
            AI-powered analysis helps you stand out and land more interviews.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link to="/upload">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-2 py-2 md:px-4 md:py:3 rounded-xl text-[14px] md:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Try Analysis Now
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
