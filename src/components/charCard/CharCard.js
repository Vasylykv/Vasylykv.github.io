import React from 'react';

import './charCard.scss';

const CharCard = (props) => {
  const { name, species, image } = props;

  return (
    <li className="characters__card">
      <div className="characters__img">
        <img src={image} alt=""></img>
      </div>
      <div className="characters__descr">
        <div className="characters__name">{name}</div>
        <div className="characters__race">{species}</div>
      </div>
    </li>
  );
};

export default CharCard;
