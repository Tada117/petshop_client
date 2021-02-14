import React, { useState, useEffect, useRef } from "react";

import { BiSearchAlt, BiUser } from "react-icons/bi";
import productService from "../../services/product.service";
import ProductItem from "./ProductItem";
import "../../assets/styles/_navBar.scss";
import useDebounce from "./useDebounce";

const SearchBar = ({ onSubmit }) => {
  const [isVisible, setVisibility] = useState(false);

  const [searchResult, setSearchResult] = useState([]); //search results list
  const [searchTerm, setSearchTerm] = useState(""); //search
  // const [filteredProduct, setFilteredProduct] = useState([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isSearching, setIsSearching] = useState(false);

  // const typingTimeOutRef = useRef(null);

  //API search function
  useEffect(() => {
    productService.getSearchResult(searchTerm).then((data) => {
      setSearchResult(data);
      console.log("Search Result:", searchTerm);
    });
  }, []);

  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        // setIsSearching(true);
        // Fire off our API call
        productService
          .getSearchResult(debouncedSearchTerm)
          .then((searchResult) => {
            // Set back to false since request finished
            // setIsSearching(false);
            // Set results state
            setSearchResult(searchResult);
          });
      } else {
        setSearchResult([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );

  // useEffect(() => {
  //   setFilteredProduct(
  //     searchResult.filter((item) =>
  //       item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  // }, [searchTerm, searchResult]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={() => setVisibility(!isVisible)}
      />
      <BiSearchAlt />
      {isVisible && (
        <div className="search-result">
          <ul className="list-group">
            {searchResult.map((result) => (
              <li key={result._id}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
