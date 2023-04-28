import React, { useState } from "react";
import "./HeadMenu.css"
import data from './data.json';
import { Link } from "react-router-dom";

const HeadMenu = () => {
  
    return (
        
          <div className="menu__links">
      {data.map((planet,index) => (
        <div className="menuPlanets" key={index}>
           <Link  to={`/planets/${planet.name}`} style={{ textDecoration:"none",display: "flex", justifyContent:"space-between"}}>
            <h3 style={{marginLeft:"24px",marginTop:"2px"}}>{planet.name}</h3>
            </Link>
          </div>
      ))}   
          </div>
       
      
    );
      };
  
  
  export default HeadMenu;