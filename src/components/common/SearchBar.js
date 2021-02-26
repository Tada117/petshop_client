import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "../../assets/styles/_navBar.scss";
import productService from "../../services/product.service";
import useDebounce from "./useDebounce";

const SearchBar = () => {
  const [isVisible, setVisibility] = useState(false);

  const [searchResult, setSearchResult] = useState([]); //search results list
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // console.log(debouncedSearchTerm);
      // Set isSearching state
      setIsSearching(true);
      // Fire off our API call
      productService.getSearchResult(debouncedSearchTerm).then((data) => {
        // Set back to false since request finished
        setIsSearching(false);
        // Set results state
        setSearchResult(data);
        setVisibility(true);
      });
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isSearching && <div className="search-result">Searching ...</div>}
      {isVisible && (
        <div className="search-result">
          <ul className="list-group">
            {searchResult.map((result) => (
              <Link key={result._id} to={`/shop/${result._id}`}>
                <li>{result.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
