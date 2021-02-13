import React, { useState } from "react";

const SearchResults = ({ imgUrl, name }) => {
  return (
    <ul className="search__item">
      <li>
        <img className="search__img" src={imgUrl} alt="" />
      </li>
      <li className="search__name">{name}</li>
    </ul>
  );
};

export default SearchResults;
