import './App.css'
import HamburgerMenu from './HamburgerMenu';
import data from "./data.JSON";
import React, { useState } from 'react';


function App() {
  
    const [planet, setPlanet] = useState("Mercury");
 
    
  const planetData = data.find((data) => data.name === planet);  

  return (
    <>
    <div className='main'>

      <div className='headerAndNavBar'>
        <h1>THE PLANETS</h1>
        <div className='burgerMenu'>{HamburgerMenu()}</div>
      </div>
      <hr className='mainHr'/>
      <div className='headInfo'>
        <h1>Overwiev</h1>
        <h1>Structure</h1>
        <h1>Surface</h1>
      </div>
      <hr className='mainHr'/>
      {planetData && (
  <div className='middleDiv'>
    <img className='mainImg' src={planetData.images.planet} alt="" />
    <h1 className='planetName'>{planetData.name}</h1>
    <p className='text'>{planetData.overview.content}</p>
    <div style={{display:"flex"}}>
    <p className='source'>Source :</p>
    <a className='source' href={planetData.overview.source}>Wikipedia</a>
    <img style={{marginLeft: "4px"}} src="./src/assets/icon-source.svg" alt="" />
    </div>
    <div className='info'>
      <div className='infoContainer'>
        <p className="infoText">ROTATION TIME</p>
        <p className="infoNumber">{planetData.rotation}</p>
      </div>
      <div className='infoContainer'>
        <p className="infoText">REVOLUTION TIME</p>
        <p className="infoNumber">{planetData.revolution}</p>
      </div>
      <div className='infoContainer'>
        <p className="infoText">RADIUS</p>
        <p className="infoNumber">{planetData.radius}</p>
      </div>
      <div className='infoContainer'>
        <p className="infoText">AVERAGE TEMP.</p>
        <p className="infoNumber">{planetData.temperature}</p>
      </div>

    </div>
  </div>
)}
    </div>
    </>
  )
}

export default App
