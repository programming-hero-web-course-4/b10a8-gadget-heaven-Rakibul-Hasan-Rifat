import { useContext } from "react";
import { WishListContext } from "../../contexts/contexts";
import WishItem from "../WishItem/WishItem";

const WishListContainer = () => {
  const { wishList } = useContext(WishListContext)
  console.log(wishList);
  return (
    <section className="w-11/12 mx-auto my-16">
      <h3 className="text-2xl font-semibold">Wish List</h3>
      <div className="flex flex-col gap-5 mt-8">
        {
          wishList.map(wishItem => <WishItem key={wishItem.product_id} wishItem={wishItem} />)
        }
      </div>
    </section>
  );
}

export default WishListContainer