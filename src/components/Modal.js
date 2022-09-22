// import React from 'react';
// import { useGlobalContext } from '../context';
// import { useNavigate } from 'react-router-dom';

// const Modal = () => {
//   const {
//     modal: { text },
//     dispatch,
//   } = useGlobalContext();
//   const navigate = useNavigate();

//   const closeModal = () => {
//     dispatch({ type: 'CLOSE_MODAL' });
//     navigate('/');
//   };
//   return (
//     <div className='Modal'>
//       <div className='inside'>
//         <h1>congratulations !!! </h1>
//         <h2>Your parrain is {text}</h2>
//         <button onClick={closeModal}>close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
  const divOverlay = useRef();
  const {
    modal: { text },
    dispatch,
  } = useGlobalContext();
  const navigate = useNavigate();

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
    navigate('/');
  };

  useEffect(() => {
    console.log(divOverlay.current.className);
    if (divOverlay.current.className === 'Modal') {
    }
  }, []);
  return (
    <div className='Modal' ref={divOverlay}>
      <div className='inside'>
        <h1>congratulations !!! </h1>
        <h2>Your parrain is {text}</h2>
        <button onClick={closeModal}>close</button>
      </div>
    </div>
  );
};

export default Modal;
