import React from 'react';
import { Link } from 'react-router-dom';

const Rubrique = ({ name, image, specialty, id }) => {
  // this id is the rubrique id
  return (
    <Link to={`/rubriquecontent/${id}/${specialty}`}>
      <div className='subRubiqueImg'>
        <img className='rubriqueImg' src={image} alt='' />
        <h4>{name}</h4>
      </div>
    </Link>
  );
};

export default Rubrique;
