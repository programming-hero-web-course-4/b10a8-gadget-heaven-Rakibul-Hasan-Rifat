import PropTypes from "prop-types";
import { Link } from "react-router";

const ProductCard = ({ accessory }) => {
  const { product_id, product_title, product_image, price } = accessory;
  // console.log(accessory);
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-3">
      <div className="flex justify-between items-center bg-[#D9D9D9] rounded-xl">
        <img
          src={product_image}
          alt=""
          className="w-full h-[170px] object-cover object-center mix-blend-multiply rounded-xl"
        />
      </div>
      <h3 className="text-xl font-semibold">{product_title}</h3>
      <p className="font-medium text-[#09080F99]">Price: ${price}</p>
      <div className="flex justify-center">
        <Link to={`details/${product_id}`}>
          <button className="flex justify-center px-4 py-1.5 text-[#9538E2] font-semibold border border-[#9538E2] rounded-4xl cursor-pointer hover:bg-[#9538E2] hover:text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  accessory: PropTypes.object,
};

export default ProductCard;
