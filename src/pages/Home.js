import React, { useEffect, useState } from "react";

import nextIcon from "../assets/images/next.png";
import prevIcon from "../assets/images/pre.png";

import Banner from "../components/Banner";
import CategoryItem from "../components/common/CategoryItem";
import ProductItem from "../components/common/ProductItem";

import productService from "./../services/product.service";
import categoryService from "./../services/category.service";

function Home(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categoryService.getCategories().then((data) => {
      const categories = data;
      setCategories(categories);
    });
  }, []);
  useEffect(() => {
    productService.getProduct().then((data) => {
      // const products = data;
      setProducts(data);
      console.log(data);
    });
  }, []);

  const myRef = React.createRef();

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };
  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft -= slide.scrollWidth;
    }
  };

  return (
    <div className="page">
      <Banner />

      <div className="category__container">
        <h2>Browse Category</h2>
        {categories.map((category) => (
          <CategoryItem
            key={category._id}
            imgUrl={`http://localhost:5000/${category.imageUrl}`}
            name={category.name}
          />
        ))}
      </div>
      <h2>Explore out Products</h2>
      <div className="products-slider">
        <div className="products__container" ref={myRef}>
          {products.map((item) => (
            <ProductItem
              key={item.product._id}
              imgUrl={`http://localhost:5000/${item.product.imageUrl}`}
              name={item.product.name}
              price={item.product.price}
              categoryName={item.categoryName}
            />
          ))}
        </div>
        <div className="row">
          <div className="pre" onClick={prevClick}>
            <img src={prevIcon} alt="" />
          </div>
          <div className="next" onClick={nextClick}>
            <img src={nextIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
