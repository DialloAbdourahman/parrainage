import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SpecialtyRubriques from './pages/SpecialtyRubriques';
import RubriqueContent from './pages/RubriqueContent';
import { useGlobalContext } from './context';

function App() {
  const {
    modal: { isModalOpen },
  } = useGlobalContext();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/specialty/rubriques/:specialty'
          element={<SpecialtyRubriques />}
        />
        <Route
          path={'/rubriquecontent/:rubriqueid/:specialty'}
          element={<RubriqueContent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
