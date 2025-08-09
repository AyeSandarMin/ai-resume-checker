import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "Resumax - Authentication" },
  {
    name: "description",
    content: "Login or register to access your resumes and AI feedback.",
  },
];
const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      if (next) {
        navigate(decodeURIComponent(next));
      } else {
        navigate(-1);
      }
    }
  }, [auth.isAuthenticated, next, navigate]);

  return (
    <main className="aurora-container bg-cover min-h-screen flex items-center justify-center overflow-hidden">
      <div className="aurora-layer aurora-1"></div>
      <div className="aurora-layer aurora-2"></div>
      <div className="aurora-layer aurora-3"></div>
      <div className="aurora-layer aurora-4"></div>
      <div className="aurora-layer aurora-5"></div>
      <div className="gradient-border shadow-lg z-10">
        <section className="flex flex-col gap-8 bg-white p-8 rounded-2xl">
          <div className="flex flex-col items-center gap-2 text-center">
            {/* <h1>Welcome from Resumax</h1> */}
            <h3 className="text-lg text-center">
              This app is powered by{" "}
              <span className="font-bold text-[#3d84a8]">Puter AI</span>.<br />{" "}
              You'll need a{" "}
              <span className="font-bold text-[#3d84a8]">Puter</span> account to
              use this app's AI features.
            </h3>
          </div>
          <div>
            {isLoading ? (
              <button className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button
                    className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    onClick={auth.signOut}
                  >
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button
                    className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    onClick={auth.signIn}
                  >
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
