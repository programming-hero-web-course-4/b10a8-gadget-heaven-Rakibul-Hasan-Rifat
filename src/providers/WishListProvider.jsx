import { useState } from "react";
import PropTypes from "prop-types";
import { WishListContext } from "../contexts/contexts";

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  
  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

WishListProvider.propTypes = {
  children: PropTypes.object,
};

export default WishListProvider;
