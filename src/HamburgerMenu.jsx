import React, { useState } from "react";
import App from "./App.jsx";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <button className="hamburger-menu__button" onClick={toggleMenu}>
          <span className="hamburger-menu__icon" />
        </button>
        {isOpen && (
          <div className="hamburger-menu__links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    );
  };
  
  export default HamburgerMenu;