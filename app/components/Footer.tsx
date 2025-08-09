import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  FileText,
  BarChart3,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/resumax-logo.png" alt="Logo" className="w-30 h-7" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              This portfolio project showcases my ability to integrate AI APIs
              and client-side storage with Puter.js, delivering a seamless
              resume-checking experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@resumeanalyzer.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#analysis"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resume Analysis
                </a>
              </li>
              <li>
                <a
                  href="#scoring"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  ATS Scoring
                </a>
              </li>

              <li>
                <a
                  href="#insights"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Industry Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resume Guides
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="h-5 w-5 text-blue-400" />
                <span className="text-2xl font-bold text-blue-400">10K+</span>
              </div>
              <p className="text-gray-300">Resumes Analyzed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="h-5 w-5 text-green-400" />
                <span className="text-2xl font-bold text-green-400">89%</span>
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-5 w-5 text-red-400" />
                <span className="text-2xl font-bold text-red-400">5K+</span>
              </div>
              <p className="text-gray-300">Happy Users</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Resumax. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
