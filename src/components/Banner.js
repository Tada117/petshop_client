import React from "react";

import banner from "../assets/images/banner2.jpg";
import "../assets/styles/_banner.scss";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-container">
        {/* <div className="banner__title">Making Your Pet Happier</div> */}
        <div className="banner__img">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
