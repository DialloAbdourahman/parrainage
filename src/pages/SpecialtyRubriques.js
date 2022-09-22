import React from 'react';
import { useGlobalContext } from '../context';
import { rubriques } from '../data';
import { useParams } from 'react-router-dom';
import Rubrique from '../components/Rubrique';

const SpecialtyRubriques = () => {
  const { data } = useGlobalContext();
  const { specialty } = useParams();
  const rubriqueList = [
    ...new Set(
      data
        .filter((item) => item.specialty === specialty)
        .map((item) => item.rubrique)
    ),
  ];

  if (rubriqueList.length === 0) {
    return (
      <section>
        <h1>Nothing more rubriques to show in this specialty</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>{specialty} Rubriques</h1>
      <div>
        {rubriqueList.map((item) => {
          const found = rubriques.find((rubrique) => rubrique.id === item);
          return <Rubrique key={item} {...found} specialty={specialty} />;
        })}
      </div>
    </section>
  );
};

export default SpecialtyRubriques;