import { Link } from "react-router";
import { CloudUpload, ArrowRight } from "lucide-react";

const Navbar = ({ buttonText, iconName }: { buttonText: string, iconName: string }) => {
  const icon = iconName == "upload" ? <CloudUpload className="inline pl-1 mt-[-3px]" /> : <ArrowRight className="inline pl-1 mt-[-3px]"/>
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">
          <img src="/resumax-logo.png" alt="Logo" className="w-30 h-7" />
        </p>
      </Link>
      <Link to="/upload" className="bg-gradient-to-r from-[#4be1ec] to-[#3D84A8] text-white px-4 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit z-10">
        <p className="text-base font-semibold inline">{buttonText}</p>
        <>{icon}</>
      </Link>
    </nav>
  );
};

export default Navbar;
