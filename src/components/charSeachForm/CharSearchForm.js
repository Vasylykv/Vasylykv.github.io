import React from 'react';

import search from '../../resources/img/search.png';

import './charSearchFrom.scss';

const CharSearchForm = ({ filterQuery, handleFilterChange }) => {
  return (
    <form className="search__container">
      <button type="submit">
        <img src={search} alt=""></img>
      </button>
      <input
        type="text"
        placeholder="Filter by name..."
        onChange={(e) => handleFilterChange(e.target.value)}
        value={filterQuery}
      ></input>
    </form>
  );
};

export default CharSearchForm;
