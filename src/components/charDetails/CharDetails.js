import React from 'react';

import './charDetails.scss';

const CharDetails = ({ character }) => {
  const { name, image, gender, status, species, origin, type } = character;

  return (
    <div className="character__info">
      <div className="character__img">
        <img src={image} alt="character's pic"></img>
      </div>
      <h2 className="character__name">{name}</h2>

      <div className="information">Informations</div>

      <ul className="character__details">
        <li className="character__details-item">
          <label className="">Gender</label>
          <div>{gender}</div>
        </li>
        <li className="character__details-item">
          <label className="">Status</label>
          <div>{status}</div>
        </li>
        <li className="character__details-item">
          <label className="">Specie</label>
          <div>{species}</div>
        </li>
        <li className="character__details-item">
          <label className="">Origin</label>
          <div>{origin}</div>
        </li>
        <li className="character__details-item">
          <label className="">Type</label>
          <div>{type}</div>
        </li>
      </ul>
    </div>
  );
};

export default CharDetails;
