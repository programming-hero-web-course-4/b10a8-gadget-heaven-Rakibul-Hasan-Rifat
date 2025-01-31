import { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useLocation } from "react-router";
import { CartContext, WishListContext } from "../../contexts/contexts";
import toast, { Toaster } from "react-hot-toast";

const DetailsSection = () => {
  const location = useLocation();
  const [productDetails, setDataDetails] = useState({});
  const { cartList, setCartList } = useContext(CartContext);
  const { wishList, setWishList } = useContext(WishListContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((gadgets) => {
        setDataDetails(
          gadgets.find(
            (gadget) => gadget.product_id === location.pathname.split("/")[2]
          )
        );
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    setCartList([...cartList, product]);
    toast.success("The item is added to your cart!!");
  };

  const handleWishList = (item) => {
    setWishList([...wishList, item]);
    toast.success('The item is added to the wish-list!!')
    console.log(item, wishList);
  };

  const {
    product_image,
    product_title,
    description,
    price,
    Specification,
    availability,
    rating,
  } = productDetails;

  console.log(location.pathname.split("/")[2], productDetails);
  return (
    <>
      <Toaster />
      <div className="w-2/3 -mt-16 flex gap-5 absolute top-[60%] bg-[#fff] text-black rounded-4xl p-4">
        <div className="w-5/12">
          <img
            src={product_image}
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
        <div className="w-7/12 flex flex-col gap-3 items-start">
          <h3 className="text-3xl font-semibold">{product_title}</h3>
          <p>
            <strong>Price: ${price}</strong>
          </p>
          {availability ? (
            <button className="px-3 py-1 text-green-600 font-semibold border border-green-400 bg-[#2f9c082f] rounded-2xl">
              In Stock
            </button>
          ) : (
            <button></button>
          )}
          <p className="text-[#09080F99]">{description}</p>
          <ul>
            <strong>Specifications: </strong>
            {Specification?.map((ps, idx) => (
              <li key={idx} className="text-[#09080F99]">
                {idx + 1}. {ps}
              </li>
            ))}
          </ul>
          <div className="font-semibold">Rating: {rating}</div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => handleAddToCart(productDetails)}
              className="flex items-center gap-2 px-3 py-1 rounded-3xl font-semibold bg-[#9538E2] text-white cursor-pointer"
            >
              <span className="font-semibold">Add to Cart</span>
              <IoCartOutline fontSize={"24px"} />
            </button>
            <button
              onClick={() => handleWishList(productDetails)}
              className="flex items-center gap-2 p-1.5 rounded-full font-semibold border border-gray-200 cursor-pointer"
            >
              <CiHeart fontSize={"24px"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
