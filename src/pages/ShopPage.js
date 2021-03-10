import React, { useState, useEffect } from "react";

import productService from "../services/product.service";
import categoryService from "../services/category.service";

import "../assets/styles/_shopPage.scss";
import ProductItem from "../components/common/ProductItem";

function ShopPage() {
  const [items, setItems] = useState([]);
  const [pCategory, setPCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState(null);

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

  return (
    <div className="page">
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
