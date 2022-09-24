import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import { useGlobalContext } from '../context';
import { rubriques } from '../data';
import Goback from '../components/Goback';

const RubriqueContent = () => {
  const {
    data,
    modal: { isModalOpen },
    dispatch,
  } = useGlobalContext();
  const { rubriqueid, specialty } = useParams();
  const [teachers, setTeachers] = useState([]);
  const rubrique = rubriques.find((rubrique) => rubrique.id == rubriqueid).name;

  const openModal = (text, id) => {
    dispatch({ type: 'OPEN_MODAL', payload: { text, id } });
  };

  useEffect(() => {
    const newTeachers = data.filter((teacher) => {
      return teacher.rubrique == rubriqueid && teacher.specialty == specialty;
    });
    setTeachers(newTeachers);
  }, [data]);

  return (
    <section className='section'>
      <Goback />
      <h1>
        {specialty} / {rubrique}
      </h1>
      <div className='Rubrique'>
        {teachers.map((teacher) => {
          const { imageUrl, name, id, title } = teacher;
          return (
            <article className='subRubiqueImg' key={teacher.id}>
              <img className='rubriqueImg' src={imageUrl} alt='' />
              <h4 style={{ textTransform: 'capitalize' }}>{title}</h4>
              <button onClick={() => openModal(name, id)}>Discover</button>
            </article>
          );
        })}
      </div>
      {isModalOpen && <Modal />}
    </section>
  );
};

export default RubriqueContent;
