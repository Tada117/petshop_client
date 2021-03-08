import React from "react";

import { AiOutlineRightCircle } from "react-icons/ai";

import banner from "../assets/images/banner2.jpg";
import dog from "../assets/images/dog.jpg";
import cat from "../assets/images/cat.jpg";
import hamster from "../assets/images/hamster.jpg";
import accessories from "../assets/images/accessories.png";
import "../assets/styles/_banner.scss";

const Banner = () => {
  return (
    <div className="header-section">
      <div className="top-header-container">
        <h1 className="top-header__title">NEW PRODUCT</h1>
        <button className="top-header__btn">SHOP NOW</button>
        <img className="top-header__img" src={banner} alt="" />
      </div>
      <hr className="header-ruler" />
      <div className="bot-header-container">
        <div className="category-dog box-shadow">
          <img className="center" src={dog} alt="" />
          <div className="overlay blur">
            <div className="overlay__icon">
              <AiOutlineRightCircle />
            </div>
            <span>Dog Shop</span>
          </div>
        </div>
        <div className="category-cat box-shadow">
          <img className="center" src={cat} alt="" />
          <div className="overlay blur">
            <div className="overlay__icon">
              <AiOutlineRightCircle />
            </div>
            <span>Cat Shop</span>
          </div>
        </div>
        <div className="category-hamster box-shadow">
          <img className="center" src={hamster} alt="" />
          <div className="overlay blur">
            <div className="overlay__icon">
              <AiOutlineRightCircle />
            </div>
            <span>Hamster Shop</span>
          </div>
        </div>
        <div className="category-acs box-shadow">
          <img className="center" src={accessories} alt="" />
          <div className="overlay blur">
            <div className="overlay__icon">
              <AiOutlineRightCircle />
            </div>
            <span>Accessories Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
