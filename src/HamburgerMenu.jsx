import React, { useState } from "react";
import "./HamburgerMenu.css"
import data from './data.json';


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu} width="24" height="21"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>

        {isOpen && (
          <div className="hamburger-menu__links">
      {data.map((planet,index) => (
        <div className="menuPlanets" key={index}>
          <div style={{display: "flex", justifyContent:"space-between"}}>
            <div className="circle"style={{backgroundColor:planet.color}}></div>
            <h3 style={{marginLeft:"24px",marginTop:"2px"}}>{planet.name}</h3>
            <img style={{width:"4px", height:"8px", marginLeft:"auto", marginRight:"32px", marginTop:"5px"}} src="./src/assets/Arrow.png"/>
          </div>
          {data.length -1  > index && <hr style={{marginBottom: "22px"}}/>}
          </div>
      ))}   
          </div>
        )}
      </div>
    );
  };
  
  export default HamburgerMenu;