import { Link } from "react-router";

const Navbar = ({ buttonText }: { buttonText: string }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">
          <img src="/resumax-logo.png" alt="Logo" className="w-30 h-7" />
        </p>
      </Link>
      <Link to="/upload" className="primary-button w-fit rounded-lg">
        <p className="text-lg font-semibold">{buttonText}</p>
      </Link>
    </nav>
  );
};

export default Navbar;
