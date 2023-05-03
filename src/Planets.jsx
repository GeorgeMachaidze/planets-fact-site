import './App.css'
import HamburgerMenu from './HamburgerMenu';
import PlanetOptions from './PlanetOptions';
import HeadMenu from './HeadMenu';
import data from "./data.JSON";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";



function Planets() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedPlanet, setSelectedPlanet] = useState('Mercury');
    const { name } = useParams();
    const planetData = data.find((data) => data.name.toLowerCase() === name.toLowerCase());  
    
  return (
    <>
    <div className='main'>

      <div className='headerAndNavBar'>
        <h1>THE PLANETS</h1>
        <div className='burgerMenu' ><HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu}/></div>
        <div className='headMenu'><HeadMenu planetData={planetData} selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet}/></div>
      </div>
      
      <hr className='mainHr'/>
      <div className="headOptions"><PlanetOptions planetData={planetData} setSelectedOption={setSelectedOption} selectedOption={selectedOption}/></div>
      <hr className='mainHr'/>
      {planetData && (
  <div className='middleDiv' style={{ display: isOpen ? "none" : "flex"}}>
        {selectedOption === "structure" && planetData.images.internal && (
        <img className='mainImg' src={planetData.images.internal} alt="" />
        )}
        {selectedOption === "surface" && planetData.images.planet && (
        <div>
            <img className='mainImg' src={planetData.images.planet} alt="" />
            {planetData.images.geology && (
            <img
                className='secondImage'
                src={planetData.images.geology}
                alt=""
                
            />
            )}
        </div>
        )}
        {selectedOption !== "structure" && selectedOption !== "surface" && (
        <img className='mainImg' src={planetData.images.planet} alt="" />
        )}

    <div className='textAndOptions'>
        <div className="textAndSource">
    <h1 className='planetName'>{planetData.name}</h1>
    <p className='textContent'>{ selectedOption === "structure" && planetData.structure.content ||
                                selectedOption === "surface" && planetData.geology.content ||
                                planetData.overview.content}</p>
    <div style={{display:"flex"}}>
    <p className='source'>Source :</p>
    <a className='source' href={selectedOption === "structure" && planetData.structure.source ||
                                selectedOption === "surface" && planetData.geology.source ||
                                planetData.overview.source}>Wikipedia</a>
    <img style={{marginLeft: "4px"}} src="/src/assets/icon-source.svg" alt="" />
    </div>
        </div>
        <div className="options">
        <PlanetOptions planetData={planetData} setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
        </div>
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

export default Planets
