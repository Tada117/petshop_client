import React, { useState, useEffect } from "react";

import productService from "../services/product.service";
import categoryService from "../services/category.service";

import "../assets/styles/_shopPage.scss";
import { paginate } from "./paginate";
import ProductItem from "../components/common/ProductItem";
import Pagination from "../components/Pagination/Pagination";

function ShopPage() {
  const [items, setItems] = useState([]);
  const [pCategory, setPCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    categoryService.getParentCategories().then((data) => {
      setPCategory(data);
    });
  }, []);

  useEffect(() => {
    categoryService.getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    productService.getProduct().then((data) => {
      if (filtered) {
        let filterItem = data.filter((f) => f.product.categoryId === filtered);
        return setItems(filterItem);
      }
      setItems(data);
    });
  }, [filtered]);

  const handleFilterd = (id) => {
    setFiltered(id);
    console.log(id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const getPageData = () => {
  //   // const {
  //   //   currentPage,
  //   //   sortColumn,
  //   //   selectedGenre,
  //   //   searchQuery,
  //   //   movies: allMovies,
  //   // } = this.state;
  //   //   let filtered = allMovies;
  //   //  if (selectedGenre && selectedGenre._id)
  //   //     filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
  //   // const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  //   const items = paginate(currentPage, 10);
  //   return { data: items };
  // };
  // setItems(getPageData());
  return (
    <div className="shop-container">
      <div className="shop-filter">
        <div className="shop-filter__title">Filter</div>

        {pCategory.map((pCat) => (
          <div className="shop-filter__category">
            <div className="filter-p">{pCat.name}</div>
            {categories.map((cat) =>
              pCat._id === cat.parentId ? (
                <fieldset id="group">
                  <input
                    className="filter-input"
                    name="group"
                    id={cat._id}
                    type="radio"
                    value={cat._id}
                  />
                  <label
                    className="filter-label"
                    htmlFor={cat._id}
                    onClick={() => handleFilterd(cat._id)}
                  >
                    {cat.name}
                  </label>
                </fieldset>
              ) : null
            )}
          </div>
        ))}
      </div>
      <div className="shop-products">
        <div className="shop-products__title">Products</div>
        {/* <div>We have {totalCount} products</div> */}
        <Pagination
          itemsCount={1}
          pageSize={10}
          currentPage={currentPage}
          onPageChange={() => handlePageChange()}
        />
        <div className="wrapper">
          <div className="shop-products__items">
            {items.map((item) => (
              <ProductItem
                item={item.product}
                key={item.product._id}
                // imgUrl={`http://localhost:5000/${item.product.imageUrl}`}
                // name={item.product.name}
                // price={item.product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
