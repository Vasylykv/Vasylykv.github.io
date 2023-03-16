import React from 'react';

import search from '../../resources/img/search.png';

import './charSearchFrom.scss';

const CharSearchForm = ({ filterQuery, handleFilterChange }) => {
  return (
    <div className="search__container">
      <div type="submit">
        <img src={search} alt=""></img>
      </div>
      <input
        type="text"
        placeholder="Filter by name..."
        onChange={(e) => handleFilterChange(e.target.value)}
        value={filterQuery}
      ></input>
    </div>
  );
};

export default CharSearchForm;
