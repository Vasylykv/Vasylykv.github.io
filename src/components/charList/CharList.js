import React from 'react';

import { Link } from 'react-router-dom';
import CharCard from '../charCard/CharCard';

import Spinner from '../UI/Spinner';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

import useCharacters from '../../hooks/useCharacters';

import './charList.scss';

const CharList = ({ filterQuery }) => {
  const { filteredCharacters, isError, isLoading } = useCharacters(filterQuery);

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
