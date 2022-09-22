import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { data } from './data';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return data;
  }
};

const resetEveryThing = () => {
  localStorage.setItem('list', JSON.stringify(data));
  window.location.reload();
};

const initialState = {
  data: getLocalStorage(),
  modal: {
    text: '',
    isModalOpen: false,
  },
};

const GlobalContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.data));
  }, [state.data]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch, resetEveryThing }}>
      {children}
    </GlobalContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
