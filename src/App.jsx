import './App.css'
import React, { useState } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Planets from './Planets';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/planets/mercury"/>} />
      <Route path='/planets/:name' element={<Planets />} />
    </Routes>
  )
}

export default App
