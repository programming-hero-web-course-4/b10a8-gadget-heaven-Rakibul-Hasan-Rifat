import { PropTypes } from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

const Cart = ({ cart }) => {
  console.log(cart);
  const { product_image, product_title, description, price } = cart;
  return (
    <div className="flex items-center gap-5 p-5 rounded-xl bg-white">
      <div className="w-[150px]">
        <img src={product_image} alt="" />
      </div>
      <div className='flex flex-col gap-3'>
        <h4 className="text-xl font-semibold">{product_title}</h4>
        <p className="text-[#09080F99]">
          {description}
        </p>
        <p>
          <strong>Price: ${price}</strong>
        </p>
      </div>
      <div className='ml-auto'>
        <button className="p-2.5 rounded-full text-red-400 border border-r-red-400 cursor-pointer">
          {<RxCross2 />}
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.object
}

export default Cart