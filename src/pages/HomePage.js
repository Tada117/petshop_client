import React, { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Banner from "../components/Banner";
import ProductItem from "../components/common/ProductItem";
import productService from "../services/product.service";

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProduct().then((data) => {
      setProducts(data);
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
      slide.scrollLeft = 0;
    }
  };

  return (
    <div>
      <Banner />
      <div className="products-slider">
        <h2>Explore out Products</h2>
        <div className="slick-arrow slick-prev" onClick={prevClick}>
          <GrPrevious />
        </div>
        <div className="slick-arrow slick-next" onClick={nextClick}>
          <GrNext />
        </div>
        <div className="products__container" ref={myRef}>
          {products.map((item) => (
            <ProductItem key={item.product._id} item={item.product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
