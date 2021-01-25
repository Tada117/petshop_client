import React from "react";
import CategoryItem from "./CategoryItem";
import "../../assets/styles/_category.scss";
const CategoryList = () => {
  return (
    <div className="category-container">
      <h1>Browsse By Category</h1>
      <CategoryItem />
    </div>
  );
};

export default CategoryList;
