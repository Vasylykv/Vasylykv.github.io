import React, { useState, useCallback, useEffect } from 'react';

import CharSearchForm from '../../components/charSeachForm/CharSearchForm';
import CharList from '../../components/charList/CharList';

import './charactersPage.scss';

import logo from '../../resources/img/logo.png';

const CharactersPage = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const handleFilterChange = useCallback((filter) => {
    localStorage.setItem('filter', filter);
    setFilterQuery(filter);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('filter')) {
      setFilterQuery(localStorage.getItem('filter'));
    }
  }, []);

  return (
    <div className="characters-page">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <CharSearchForm
        filterQuery={filterQuery}
        handleFilterChange={handleFilterChange}
      />
      <CharList filterQuery={filterQuery} />
    </div>
  );
};

export default CharactersPage;
