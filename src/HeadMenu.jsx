import React, { useState } from "react";
import "./HeadMenu.css"
import data from './data.json';
import { Link } from "react-router-dom";

const HeadMenu = (props) => {
  
  const { name } = props;

    return (
        
      <div className="menu__links">  
          
      {data.map((planet,index) => (
        <div className="menuPlanets"  key={index} >
          <div  className="rectangleForPC"
            style={{
              backgroundColor:
                name === planet.name ? planet.color : "transparent"
            }}
             ></div>  
           <Link onClick={() => setSelectedPlanet(planet.name)} to={`/planets/${planet.name}`} style={{ textDecoration:"none",display: "flex", justifyContent:"space-between"}}>
            <h3>{planet.name}</h3>
            </Link>
            
          </div>
      ))}   
          </div>
       
      
    );
      };
  
  
  export default HeadMenu;
  