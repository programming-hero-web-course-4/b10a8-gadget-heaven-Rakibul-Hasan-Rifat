import { Link, NavLink } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto py-8">
      <Link to="/">
        <h3 className="font-semibold">Gadget Heaven</h3>
      </Link>
      <ul className="flex gap-12">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="p-2 rounded-full cursor-pointer text-black bg-white">
          <FaRegHeart />
        </button>
        <button className="p-2 rounded-full cursor-pointer text-black bg-white">
          <IoCartOutline />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
