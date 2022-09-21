import React, { useContext, useReducer } from 'react';
import reducer from './reducer';
import data from './data';

const initialState = {
  data,
};

const GlobalContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
