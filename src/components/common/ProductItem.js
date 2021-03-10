import React, { useState } from "react";

import { FaCartPlus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/cart";

import "../../assets/styles/_product.scss";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCartClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={`http://localhost:5000/${item.imageUrl}`} alt="" />
      </div>
      <span className="product__name">{item.name}</span>
      <span className="product__price">{item.price}</span>
      <div className="overlay ">
        <div className="overlay__icon--product">
          <FaCartPlus onClick={() => handleAddToCartClick(item)} />
        </div>
        <label className="overlay__added">Added to cart</label>
      </div>
    </div>
  );
};

export default ProductItem;
