import { Outlet } from "react-router";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const DashboardPage = () => {
  return (
    <>
      <header>
          <Navbar />
          <div className="min-h-[350px] bg-[#9538E2] text-white py-4">
            <Banner
              title="Dashboard"
              description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            />
          </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardPage;
