import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import RickAndMortyService from '../../services/RickAndMortyService';
import Spinner from '../UI/Spinner';
import ErrorMessage from '../UI/ErrorMessage';
import CharCard from '../charCard/CharCard';

import { sortCharactersByName, searchByFilter } from '../../helpers';

import './charList.scss';

const CharList = ({ filterQuery }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const rickandmortyservice = new RickAndMortyService();

  useEffect(() => {
    rickandmortyservice
      .getAllCharacters()
      .then((res) => {
        setCharacters(sortCharactersByName(res));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  useEffect(() => {
    const filteredChars = searchByFilter(characters, filterQuery);
    setFilteredCharacters(sortCharactersByName(filteredChars));
  }, [characters, filterQuery]);

  if (error) return <ErrorMessage />;
  if (loading) return <Spinner />;

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
