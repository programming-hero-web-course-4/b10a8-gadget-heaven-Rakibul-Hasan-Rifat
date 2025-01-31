import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router";
import BannerImage from "../BannerImage/BannerImage";
import DetailsSection from "../DetailsSection/DetailsSection";

const Banner = ({ title, description }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDashboardBtn = (e) => {
    console.log(e.target, e.currentTarget.children);
    Array.from(e.currentTarget.children).forEach((child) => {
      child.classList.remove("dashboard_active_btn");
    });
    e.target.classList.add("dashboard_active_btn");

    if (e.target === e.currentTarget.children[0]) {
      console.log("both are same 0");
      navigate("cart");
    }
    if (e.target === e.currentTarget.children[1]) {
      console.log("both are same 1");
      navigate("wishlist");
    }
  };

  return (
    <div className={`my-10 flex flex-col items-center gap-6`}>
      <h1 className="text-5xl font-semibold text-center">{title}</h1>
      <p className="text-center">{description}</p>

      {location.pathname === "/" && (
        <button className="px-4 py-2 rounded-3xl font-semibold bg-white text-[#9538E2] cursor-pointer">
          Shop Now
        </button>
      )}

      {location.pathname === "/" ? (
        <BannerImage />
      ) : !location.pathname.includes("dashboard") ? (
        <DetailsSection />
      ) : (
        ""
      )}

      {location.pathname.includes("dashboard") && (
        <div className="flex gap-3" onClick={handleDashboardBtn}>
          <button className="px-4 py-2 rounded-3xl font-semibold text-white border border-white cursor-pointer hover:bg-white hover:text-[#9538E2]">
            Cart
          </button>
          <button className="px-4 py-2 rounded-3xl font-semibold text-white border border-white cursor-pointer hover:bg-white hover:text-[#9538E2]">
            Whishlist
          </button>
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Banner;
