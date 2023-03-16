import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import RickAndMortyService from '../../services/RickAndMortyService';
import CharDetails from '../../components/charDetails/CharDetails';

import Spinner from '../../components/UI/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage';
import arrowBack from '../../resources/img/arrow-back.svg';

import './SingleCharPage.scss';

const SingleCharPage = (props) => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const rickandmortyapi = new RickAndMortyService();

  useEffect(() => {
    rickandmortyapi
      .getCharacter(id)
      .then((char) => {
        setCharacter(char);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    sessionStorage.setItem('currentCharacterId', id);
  }, [id]);

  if (error) return <ErrorMessage />;
  if (loading) return <Spinner />;

  return (
    <div className="character-page">
      <Link to="/" className="go-back" id="go-back">
        <img src={arrowBack} alt="go back arrow"></img>
        <span>Go Back</span>
      </Link>
      <CharDetails character={character} />
    </div>
  );
};

export default SingleCharPage;
