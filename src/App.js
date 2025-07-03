import React from 'react';
import './App.css';
import Home from './mainPages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Services from './mainPages/Services.jsx';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>}></Route>
    </Routes>
    </>
  );
}

export default App;


