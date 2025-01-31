import PropTypes from "prop-types";
// import { NavLink } from "react-router";

const CategoryBtn = ({ category, handleCategoryBtn }) => {
  return (
    <button
      onClick={(event) => handleCategoryBtn(event, category.toLowerCase())}
      className="px-4 py-2 rounded-4xl bg-[#09080F0D] text-[#09080F99] font-semibold cursor-pointer"
    >
      {category}
    </button>
  );
};

CategoryBtn.propTypes = {
  category: PropTypes.string,
  handleCategoryBtn: PropTypes.func,
};

export default CategoryBtn;
