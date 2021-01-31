import React, { useState } from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  // NavBtnLink,
  // NavSearchBar,
  NavBtnCart,
  NavBtnUser,
  NavBtnSearch,
} from "./NavbarElements";
import "../../assets/styles/_navBar.scss";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        {/* <NavSearchBar /> */}
        <div className="wrapper">
          {show ? (
            <input
              type="text"
              className="search-input"
              src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"
            />
          ) : null}
          <NavBtnSearch
            className="search-btn"
            onClick={() => setShow(!show)}
          ></NavBtnSearch>
        </div>
      </NavMenu>

      <NavBtn>
        <NavBtnCart />
        <NavBtnUser />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
