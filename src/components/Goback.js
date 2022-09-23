import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Goback = () => {
  const navigate = useNavigate();
  return (
    <div className='Goback'>
      <button className='backBtn' onClick={() => navigate(-1)}>
        <BiArrowBack className='arrow' />
      </button>
    </div>
  );
};

export default Goback;
