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
    <div className="page">
      <Banner />
      {/* <div className="products-slider">
        <h2>Explore out Products</h2>
        <div className="slick-arrow slick-prev" onClick={prevClick}>
          <GrPrevious />
        </div>
        <div className="slick-arrow slick-next" onClick={nextClick}>
          <GrNext />
        </div>
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
      </div> */}
    </div>
  );
}

export default Home;
