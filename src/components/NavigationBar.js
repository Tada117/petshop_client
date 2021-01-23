import React from "react";
import { IconContext } from "react-icons";

import { BiUser, BiSearchAlt } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

import "../assets/styles/_navBar.scss";
import logo from "../assets/images/logo.png";
import SearchBar from "./SearchBar";

function NavigationBar() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="header">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__nav">
          <nav>hehehe</nav>
          <div className="header__nav--item">Home</div>
          <div className="header__nav--item">Shop For Dogs</div>
          <div className="header__nav--item">Shop For Cat</div>
          <div className="header__nav--item">Brands</div>
          <div className="header__nav--item">Contact</div>
        </div>
        <div className="header__control">
          <div className="header__control search__wrap">
            <input
              className="search__input"
              type="text"
              placeholder="Search something...."
            />
            <BiSearchAlt className=" search__icon" />
          </div>
          <IoCartOutline />
          <BiUser />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default NavigationBar;
