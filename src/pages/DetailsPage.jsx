import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

const DetailsPage = () => {
  return (
    <>
      <header className={`min-h-[600px] mb-40 relative`}>
        <div className="">
          <Navbar />
          <div className="min-h-[350px] bg-[#9538E2] text-white py-4">
            <Banner
              title="Product Details"
              description="Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!"
            />
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default DetailsPage;
