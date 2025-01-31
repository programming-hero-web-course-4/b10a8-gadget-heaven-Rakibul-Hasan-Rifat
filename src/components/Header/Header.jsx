import { useLocation } from "react-router";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className={`min-h-[600px] m-12 p-5 relative ${
        location.pathname === "/" ? "rounded-4xl bg-[#9538E2] text-white" : ""
      }`}
    >
      <div className="w-11/12 mx-auto">
        <Navbar />
        <Banner />
      </div>
    </header>
  );
};

export default Header;
