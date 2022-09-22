import React from 'react';
import { useNavigate } from 'react-router-dom';

const Goback = () => {
  const navigate = useNavigate();
  return (
    <div className='Goback'>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Goback;
