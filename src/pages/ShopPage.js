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
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

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
    getPageData();
  }, [offset, filtered]);

  const getPageData = () => {
    productService.getProduct().then((data) => {
      setItems(data);
      const filteredItem = data.filter(
        (f) => f.product.categoryId === filtered
      );
      setItems(filteredItem);
      const slice = filteredItem.slice(offset, offset + perPage);
      setItems(slice);
      setTotalItems(filteredItem.length);
      setPageCount(Math.ceil(filteredItem.length / perPage));
    });
  };
  //filter by category
  const handleFilterd = (id) => {
    setOffset(0);
    setFiltered(id);
  };

  //pagination
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
    console.log("hehe", offset);
  };
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
        <div>We have {items.length} products</div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
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
