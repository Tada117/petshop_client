import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import productService from "../services/product.service";
import categoryService from "../services/category.service";

import "../assets/styles/_shopPage.scss";

import ProductItem from "../components/common/ProductItem";

function ShopPage() {
  const [pCategory, setPCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalItems, setTotalItems] = useState();

  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  const [pageCount, setPageCount] = useState(0);

  const [filtered, setFiltered] = useState(null);
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

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

  const getPageData = () => {
    productService.getProduct().then((data) => {
      if (filtered) {
        let filterItem = data.filter((f) => f.product.categoryId === filtered);
        const slice = filterItem.slice(offset, offset + perPage);
        setPageCount(Math.ceil(filterItem.length / perPage));
        setTotalItems(filterItem.length);
        console.log("slice", slice);
        setItems(slice);
      } else {
        const slice = data.slice(offset, offset + perPage);
        setTotalItems(data.length);
        setPageCount(Math.ceil(data.length / perPage));
        setItems(slice);
        console.log("slice", slice);
      }
    });
  };
  useEffect(() => {
    getPageData();
  }, [filtered, offset]);
  //filter by category
  const handleFilterd = (id) => {
    setOffset(0);
    setFiltered(id);
  };

  //pagination
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + perPage);
    console.log("hehe", selectedPage);
  };
  return (
    <div className="shop-container">
      <div className="shop-filter">
        <div className="shop-filter__title">Filter</div>

        {pCategory.map((pCat) => (
          <div className="shop-filter__category" key={pCat._id}>
            <div className="filter-p">{pCat.name}</div>
            {categories.map((cat) =>
              pCat._id === cat.parentId ? (
                <fieldset id="group" key={cat._id}>
                  <input
                    className="filter-input"
                    name="group"
                    type="radio"
                    id={cat._id}
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
        <div>We have total {totalItems} products</div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          // pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        <div className="wrapper">
          <div className="shop-products__items">
            {items.map((item) => (
              <ProductItem item={item.product} key={item.product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
