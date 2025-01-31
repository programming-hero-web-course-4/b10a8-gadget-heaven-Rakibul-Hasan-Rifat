import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../contexts/contexts";

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.object,
};

export default CartProvider;
