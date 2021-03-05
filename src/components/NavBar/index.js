import React, { useState, useEffect } from "react";

import SearchBar from "../common/SearchBar";
import Modal from "../Modal/Modal";
import useScript from "./useScript";
import categoryService from "../../services/category.service";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

import "../../assets/styles/_navBar.scss";
import "../../components/Modal/account.scss";

import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  useScript("./switchForm.js");

  const [show, setShow] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [openAccModal, setOpenAccModal] = useState(false);
  const [pCategory, setPCategory] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    categoryService.getParentCategories().then((data) => {
      setPCategory(data);
    });
  }, []);

  useEffect(() => {
    categoryService.getCategories().then((data) => {
      setCategory(data);
    });
  }, []);

  const history = useHistory();
  const handleCartClick = () => history.push("/cart");

  return (
    <>
      <nav className="nav-container">
        {/* 1: LOGO */}
        <div className="nav__logo">
          <NavLink to="/">PET SHOP</NavLink>
        </div>
        {/* 2: BURGER */}
        <div className="nav__burger" onClick={() => setShow(!show)}>
          {" "}
          <FaBars />
        </div>
        {/* 3: ITEMS */}
        <div className={`nav__items ${show ? "show" : ""}`}>
          <div className="item">
            <NavLink to="/shop">Shop</NavLink>
          </div>
          <div
            className="item"
            onMouseEnter={() => setShowCat(true)}
            onMouseLeave={() => setShowCat(false)}
          >
            <NavLink to="/category">Category</NavLink>
            {showCat && (
              <div className="cat-container">
                {pCategory.map((pCat) => (
                  <div className="cat-group">
                    <div className="p-cat">{pCat.name}</div>
                    {category.map((cat) =>
                      pCat._id === cat.parentId ? (
                        <div className="c-cat">{cat.name} </div>
                      ) : null
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="item">
            <NavLink to="/blog">Blog</NavLink>
          </div>
          <div className="item">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        {/* 4: CONTROL */}
        <div className="nav-control">
          <div className="nav-control__search-bar">
            <SearchBar />
          </div>
          <div className="nav-control__icon">
            <AiOutlineShoppingCart onClick={handleCartClick} />
          </div>
          <div className="nav-control__icon">
            <RiAccountCircleLine onClick={() => setOpenAccModal(true)} />
          </div>
        </div>
      </nav>
      <Modal open={openAccModal} onClose={() => setOpenAccModal(false)}>
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>

            <button className="toggle-btn">Login</button>
            <button className="toggle-btn">Register</button>
          </div>
          {/* LOGIN FORM */}
          <form id="login" action="submit" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span className="rmb-box">Remember your password</span>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
          {/* REGISTER FORM */}
          <form id="register" action="submit" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Enter Username"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter Email"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span className="rmb-box">I agree to the terms & conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
