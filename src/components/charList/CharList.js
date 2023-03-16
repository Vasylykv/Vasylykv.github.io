import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useQuery } from 'react-query';

import Spinner from '../UI/Spinner';
import ErrorMessage from '../UI/ErrorMessage';
import CharCard from '../charCard/CharCard';

import {
  getData,
  sortCharactersByName,
  searchByFilter,
  transformCharacter,
} from '../../helpers';

import './charList.scss';

const CharList = ({ filterQuery }) => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const {
    data: characters = [],
    isError,
    isLoading,
  } = useQuery(
    'characters',
    () => getData(`${process.env.REACT_APP_API_BASE}character`),
    {
      select: (res) => res.results.map(transformCharacter),
      onSuccess: (data) => FilterAndSort(data),
    }
  );

  function FilterAndSort(charsArr) {
    const filteredChars = searchByFilter(charsArr, filterQuery);
    setFilteredCharacters(sortCharactersByName(filteredChars));
  }

  useEffect(() => {
    FilterAndSort(characters);
    // eslint-disable-next-line
  }, [filterQuery]);

  if (isError) return <ErrorMessage />;
  if (isLoading) return <Spinner />;

  return (
    <ul className="characters__list">
      {filteredCharacters.map((char) => {
        return (
          <Link key={char.id} to={`/character/${char.id}`}>
            <CharCard {...char} />
          </Link>
        );
      })}
    </ul>
  );
};

export default CharList;
