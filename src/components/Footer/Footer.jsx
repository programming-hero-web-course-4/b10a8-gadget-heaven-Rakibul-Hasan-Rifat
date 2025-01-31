import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 m-12 p-5 text-center">
      <Link to="/">
        <h2 className="text-3xl font-semibold">Gadget Heaven</h2>
      </Link>
      <p className="text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="w-5/6 mx-auto text-[#09080F1A] border" />
      <div className="w-2/3 flex justify-evenly">
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <p className="text-[#09080F99]">Product Support</p>
          <p className="text-[#09080F99]">Order Tracking</p>
          <p className="text-[#09080F99]">Shipping & Delivery</p>
          <p className="text-[#09080F99]">Returns</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <p className="text-[#09080F99]">About</p>
          <p className="text-[#09080F99]">Careers</p>
          <p className="text-[#09080F99]">Contact</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <p className="text-[#09080F99]">Terms of Services</p>
          <p className="text-[#09080F99]">Privacy Policy</p>
          <p className="text-[#09080F99]">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
