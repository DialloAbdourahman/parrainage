import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>logo</h1>
      <div>
        <Link to={'/gele'}>GELE</Link>
        <Link to={'/getel'}>GETEL</Link>
      </div>
    </nav>
  );
};

export default Navbar;
