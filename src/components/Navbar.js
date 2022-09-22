import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { resetEveryThing, data } = useGlobalContext();

  return (
    <nav>
      <Link to={'/'}>
        <img src={'/images/logo.png'} alt='' />
      </Link>
      <div>
        <Link to={'/specialty/rubriques/GELE'}>GELE</Link>
        <Link to={'/specialty/rubriques/GETEL'}>GETEL</Link>
        {data.length === 0 && <button onClick={resetEveryThing}>Reset</button>}
      </div>
    </nav>
  );
};

export default Navbar;
