import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getData, transformCharacter } from '../../helpers';
import CharDetails from '../../components/charDetails/CharDetails';

import Spinner from '../../components/UI/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage';
import arrowBack from '../../resources/img/arrow-back.svg';

import './SingleCharPage.scss';

const SingleCharPage = (props) => {
  const { id } = useParams();

  const {
    data: character = {},
    isError,
    isLoading,
  } = useQuery(
    'character',
    () => getData(`${process.env.REACT_APP_API_BASE}character/${id}`),
    {
      select: (res) => transformCharacter(res),
      cacheTime: 0,
    }
  );

  if (isError) return <ErrorMessage />;
  if (isLoading) return <Spinner />;

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
