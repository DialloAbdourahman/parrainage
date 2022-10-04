import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { resetEveryThing, data } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <nav className='Navbar'>
      <Link to={'/'}>
        <img src={'/images/Parrainage.png'} alt='' className='logo' />
      </Link>
      <div className='links'>
        <Link to={'/specialty/rubriques/GELE'}>PARRAINAGE 3GELE</Link>
        <Link to={'/specialty/rubriques/GTEL'}>PARRAINAGE 3GTEL</Link>
        {/* {data.length === 0 && <button onClick={resetEveryThing}>Reset</button>} */}
      </div>
      <button
        className='resetBtn'
        onClick={() => {
          navigate('/');
          resetEveryThing();
        }}
      >
        RESET !
      </button>
    </nav>
  );
};

export default Navbar;
