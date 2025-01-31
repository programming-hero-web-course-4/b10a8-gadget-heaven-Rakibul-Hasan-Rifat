import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";

const WishItem = ({ wishItem }) => {
  const { product_image, product_title, description, price } = wishItem;
  return (
    <div className="flex items-center gap-5 p-5 rounded-xl bg-white">
      <div className="w-[150px]">
        <img src={product_image} alt="" />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <h4 className="text-xl font-semibold">{product_title}</h4>
        <p className="text-[#09080F99]">
          <span className="font-semibold">Description:</span> {description}
        </p>
        <p>
          <strong>Price: ${price}</strong>
        </p>
        <button className="py-1 px-3 rounded-3xl font-semibold text-white bg-[#9538E2] cursor-pointer">
          Add to Cart
        </button>
      </div>
      <div className="ml-auto">
        <button className="p-2.5 rounded-full text-red-400 border border-r-red-400 cursor-pointer">
          {<RxCross2 />}
        </button>
      </div>
    </div>
  );
};

WishItem.propTypes = {
  wishItem: PropTypes.object,
};

export default WishItem;
