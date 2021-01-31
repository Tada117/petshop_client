import React from "react";

import "../../assets/styles/_product.scss";

const ProductItem = ({ imgUrl, name, price, description, categoryName }) => {
  return (
    <div className="product__item">
      <img className="product__img" src={imgUrl} alt="" />
      <span className="product__name">{name}</span>
      <span className="product__price">{price}</span>
      <span className="product__description">{description}</span>
      <span className="product__categoryName">{categoryName}</span>
    </div>
  );
};

export default ProductItem;
