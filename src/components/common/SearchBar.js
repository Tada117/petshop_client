import React, { useState, useEffect, useRef } from "react";

import { BiSearchAlt, BiUser } from "react-icons/bi";
import productService from "../../services/product.service";
import ProductItem from "./ProductItem";
import "../../assets/styles/_navBar.scss";
import SearchResults from "./SearchResults";

const SearchBar = ({ onSubmit }) => {
  const [isVisible, setVisibility] = useState(false);

  const [searchResult, setsearchResult] = useState([]); //search results list
  const [searchTerm, setSearchTerm] = useState(""); //search
  const [filteredProduct, setFilteredProduct] = useState([]);

  const typingTimeOutRef = useRef(null);

  useEffect(() => {
    productService.getProduct().then((data) => {
      setsearchResult(data);
    });
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: e.target.value,
      };

      onSubmit(formValues);
    }, 300);
  };

  useEffect(() => {
    setFilteredProduct(
      searchResult.filter((product) =>
        product.product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, searchResult]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        onClick={() => setVisibility(!isVisible)}
      />
      <BiSearchAlt />
      {isVisible && (
        <div className="search-result">
          <ul className="list-group">
            {filteredProduct.map((item) => (
              <li key={item.product._id}>{item.product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
