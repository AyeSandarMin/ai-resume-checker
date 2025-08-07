import React from "react";
import { CircleCheck, CircleAlert, CircleX } from "lucide-react";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  const colorClass =
    score > 69
      ? "text-green-700"
      : score > 49
        ? "text-yellow-500"
        : "text-red-700";

  const icon =
    score > 69 ? (
      <CircleCheck color="#008236" width={45} height={45} />
    ) : score > 49 ? (
      <CircleAlert color="#bb4d00" width={45} height={45} />
    ) : (
      <CircleX color="#c10007" width={45} height={45} />
    );

  const subtitle =
    score > 69 ? "Great Job!" : score > 49 ? "Good Start" : "Needs Improvement";

  return (
    <div className={`bg-white rounded-2xl shadow-md w-full p-6`}>
      <div className="flex items-center gap-4 mb-6">
        <>{icon}</>
        <div>
          <h3 className="text-2xl font-bold">ATS Score - {score}/100</h3>
        </div>
      </div>

      <div className="mb-6">
        <h3 className={`text-xl font-semibold mb-2  ${colorClass}`}>
          {subtitle}
        </h3>
        <p className="text-gray-600 mb-4">
          This score represents how well your resume is likely to perform in
          Applicant Tracking Systems used by employers.
        </p>

        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3">
              <img
                src={
                  suggestion.type === "good"
                    ? "/icons/check.svg"
                    : "/icons/warning.svg"
                }
                alt={suggestion.type === "good" ? "Check" : "Warning"}
                className="w-5 h-5 mt-1"
              />
              <p
                className={
                  suggestion.type === "good"
                    ? "text-green-700"
                    : "text-amber-700"
                }
              >
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">
        Keep refining your resume to improve your chances of getting past ATS
        filters and into the hands of recruiters.
      </p>
    </div>
  );
};

export default ATS;
