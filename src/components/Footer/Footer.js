import React from "react";

import "../../assets/styles/_footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer__group">
          <span>HELP</span>
          <ul className="footer__group-items">
            <li>Shipping & Returns</li>
            <li>Track your order</li>
            <li>Store Finder</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer__group">
          <span>ABOUT</span>
          <ul className="footer__group-items">
            <li>Shipping & Returns</li>
            <li>Track your order</li>
            <li>Store Finder</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer__group">
          <span>CATEGORIES</span>
          <ul className="footer__group-items">
            <li>Shipping & Returns</li>
            <li>Track your order</li>
            <li>Store Finder</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer__group">
          <span>JOIN US AND RECEIVE ALL PROMOTION INFORMATION</span>
          <div className="footer__input-group">
            <input type="text" placeholder="Your email" />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
