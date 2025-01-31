import { useEffect, useState } from "react";
import "./Home.css";
import CategoryBtn from "../CategoryBtn/CategoryBtn";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [categorywiseAccessories, setCategorywiseAccessories] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAccessories(data);
        setCategorywiseAccessories(data);

        let extractedCategories = [];
        data.forEach((acc) => {
          if (!extractedCategories.includes(acc.category)) {
            extractedCategories.push(acc.category);
          }
        });
        setCategories(["All Categories", ...extractedCategories]);
      });
  }, []);

  const handleCategoryBtn = (event, productCategory = "all categories") => {
    console.log(
      Array.from(event.target.parentElement.children),
      productCategory
    );
    Array.from(event.target.parentElement.children).forEach((child) => {
      child.classList.remove("active_btn");
    });
    event.target.classList.add("active_btn");
    productCategory === "all categories"
      ? setCategorywiseAccessories(accessories)
      : setCategorywiseAccessories(
          accessories.filter(
            (accessory) => accessory.category.toLowerCase() === productCategory
          )
        );
  };

  return (
    <div className="m-12 mt-[400px] p-5">
      <h2 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex items-start gap-4 my-12">
        <div className="w-2/12 flex flex-col gap-5 p-4 rounded-xl bg-white border border-[#0000002f]">
          {categories.map((category, idx) => (
            <CategoryBtn
              key={idx}
              category={category}
              handleCategoryBtn={handleCategoryBtn}
            />
          ))}
        </div>
        <div className="w-10/12 grid grid-cols-3 gap-4 rounded-xl">
          {categorywiseAccessories.map((accessory) => (
            <ProductCard
              key={accessory.product_id}
              accessory={accessory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
