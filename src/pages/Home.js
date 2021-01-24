import React from "react";
import Banner from "../components/Banner";
import CategoryList from "../components/Category/CategoryList";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <CategoryList />
    </div>
  );
}

export default Home;
