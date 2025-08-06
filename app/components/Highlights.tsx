import { Link } from "react-router";

const Highlights = () => {
  const features = [
    {
      id: 1,
      title: "No sign-up required",
      description:
        "Get started instantly without creating an account or providing personal information",
      gradientFrom: "from-emerald-400",
      gradientTo: "to-cyan-400",
      gifIcon: "/images/info-2.gif",
    },
    {
      id: 2,
      title: "Instant PDF analysis",
      description:
        "Upload and analyze your PDF documents in seconds with AI-powered technology",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-400",
      gifIcon: "/images/resume-scan.gif",
    },
    {
      id: 3,
      title: "Job-specific feedback",
      description:
        "Receive tailored insights and recommendations based on your industry and role",
      gradientFrom: "from-orange-400",
      gradientTo: "to-red-400",
      gifIcon: "/images/info-3.gif",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 h-auto w-full z-10">
      <div className="max-w-[1200px] mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How It Works –{" "}
            <span className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] bg-clip-text text-transparent">
              Fast, Accurate, Targeted
            </span>
          </h2>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group text-center relative bg-white rounded-3xl p-4 shadow-lg border border-gray-100"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
              ></div>

              <div className="flex items-center space-x-4 relative z-10">
                <div className="flex-shrink-0 inline-flex items-center justify-center bg-transparent group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img
                    src={feature.gifIcon}
                    alt={`${feature.title} icon`}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors text-left">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-16">
          <Link
            to="/upload"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <span>Try It Now - Free!</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Highlights;
