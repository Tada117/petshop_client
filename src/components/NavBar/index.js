import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { TiTimes } from "react-icons/ti";

import "../../assets/styles/_navBar.scss";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const toggleClass = () => {
    setShow(!show);
  };
  return (
    <nav className="nav__container">
      <ul>
        <li className="nav__logo">Pet Store</li>
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
        {/* <div className="nav__cancel-icon">
          <TiTimes />
        </div> */}
        <li className="nav__search-icon">
          <input type="search" placeholder="Search..." />

          <BiSearchAlt />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
