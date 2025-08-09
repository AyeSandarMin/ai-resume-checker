import { Link } from "react-router";

const Highlights = () => {
  const features = [
    {
      id: 1,
      title: "Secure Puter.js sign-in",
      gradientFrom: "from-emerald-400",
      gradientTo: "to-cyan-400",
      gifIcon: "/images/info-2.gif",
    },
    {
      id: 2,
      title: "Real-time resume analysis",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-400",
      gifIcon: "/images/resume-scan.gif",
    },
    {
      id: 3,
      title: "Job-specific feedback",
      gradientFrom: "from-orange-400",
      gradientTo: "to-red-400",
      gifIcon: "/images/info-3.gif",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 h-auto w-full z-10">
      <div className="max-w-[1200px] mx-auto">
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
      </div>
    </section>
  );
};

export default Highlights;
