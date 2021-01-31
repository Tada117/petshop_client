import React from "react";

import "../../assets/styles/_category.scss";

const CategoryItem = ({ imgUrl, name }) => {
  return (
    <div className="category__item">
      <img src={imgUrl} alt="" />
      <span>{name}</span>
    </div>
  );
};

export default CategoryItem;
