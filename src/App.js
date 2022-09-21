import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Getel from './pages/Getel';
import Gele from './pages/Gele';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gele' element={<Gele />} />
        <Route path='/getel' element={<Getel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
