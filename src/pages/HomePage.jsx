import { Outlet } from "react-router";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <header
        className={`min-h-[600px] m-12 p-5 relative rounded-4xl bg-[#9538E2] text-white`}
      >
        <div className="w-11/12 mx-auto">
          <Navbar />
          <Banner
            title="Upgrade Your Tech Accessorize with Gadget Heaven Accessorie"
            description="Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!"
          />
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomePage;
