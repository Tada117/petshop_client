import React, { useState } from "react";

import SearchBar from "../common/SearchBar";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";

import "../../assets/styles/_navBar.scss";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleClass = () => {
    setShow(!show);
  };

  return (
    <nav className="nav__container">
      <ul>
        <li className="nav__logo">
          <NavLink to="/">Pet Store</NavLink>
        </li>
        <li className="nav__burger" onClick={toggleClass}>
          {" "}
          <FaBars />
        </li>
        <div className={`nav__items ${show ? "show" : ""}`}>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>

        <li className="nav__search-icon">
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
