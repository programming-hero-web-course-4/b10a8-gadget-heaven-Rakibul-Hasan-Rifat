import { useContext } from "react";
import { CartContext } from "../../contexts/contexts";
import { PiSlidersDuotone } from "react-icons/pi";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../Cart/Cart";

const CartContainer = () => {
  const { cartList } = useContext(CartContext);
  console.log(cartList);
  console.log(
    cartList &&
      cartList.reduce((total, currProduct) => total + currProduct.price, 0)
  );
  return (
    <section className="w-11/12 mx-auto my-16">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Cart</h3>
        <div className="flex items-center gap-5">
          <h3 className="text-2xl font-semibold">
            Total cost:{" "}
            {cartList.reduce(
              (total, currProduct) => total + currProduct.price,
              0
            )}
          </h3>
          <button className="flex items-center gap-2 font-semibold py-1 px-3 rounded-3xl text-[#9538E2] border border-[#9538E2] cursor-pointer">
            <span>Sort by Price</span> <PiSlidersDuotone />
          </button>
          <button className="flex items-center gap-2 py-1 px-3 rounded-3xl font-semibold text-white bg-[#9538E2] cursor-pointer">
            <span>Purchase</span><CgShoppingCart />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-12">
        {
          cartList.map(cart => <Cart key={cart.product_id} cart={cart} />)
        }
      </div>
    </section>
  );
};

export default CartContainer;
