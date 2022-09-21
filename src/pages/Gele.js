import React from 'react';
import { useGlobalContext } from '../context';

const Gele = () => {
  const { data } = useGlobalContext();
  const Gele = [
    ...new Set(
      data
        .filter((item) => item.specialty === 'GELE')
        .map((item) => item.rubrique)
    ),
  ];
  return (
    <section>
      {Gele.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </section>
  );
};

export default Gele;
