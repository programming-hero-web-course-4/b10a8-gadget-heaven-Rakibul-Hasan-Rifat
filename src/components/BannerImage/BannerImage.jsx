import bannerImg from "../../assets/banner.jpg";
const BannerImage = () => {
  return (
    <div className="w-2/3 mt-8 absolute top-[60%] bg-[#ffffff49] rounded-4xl p-4 border-2 border-white">
      <img src={bannerImg} alt="" className="rounded-3xl" />
    </div>
  );
};

export default BannerImage;
