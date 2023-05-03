import React, { useState } from "react";
import "./planetOptions.css";

function PlanetOptions({ selectedOption, setSelectedOption, planetData }) {
  return (
    <div className="headInfo">
      <div
        style={{ "--color": planetData.color }}
        className={
          selectedOption === "overview" ? "option optionActive" : "option"
        }
        onClick={() => setSelectedOption("overview")}
      >
        <p className="number">01</p>
        <h1>Overview</h1>
        <div
          className="rectangle"
          style={{
            backgroundColor: selectedOption === "overview" && planetData.color,
          }}
        ></div>
      </div>
      <div
        style={{ "--color": planetData.color }}
        className={
          selectedOption === "structure" ? "option optionActive" : "option"
        }
        onClick={() => setSelectedOption("structure")}
      >
        <p className="number">02</p>
        <h1>
          <span>Internal</span> Structure
        </h1>
        <div
          className="rectangle"
          style={{
            backgroundColor: selectedOption === "structure" && planetData.color,
          }}
        ></div>
      </div>
      <div
        style={{ "--color": planetData.color }}
        className={
          selectedOption === "surface" ? "option optionActive" : "option"
        }
        onClick={() => setSelectedOption("surface")}
      >
        <p className="number">03</p>
        <h1>
          Surface <span>Geology</span>
        </h1>
        <div
          className="rectangle"
          style={{
            backgroundColor: selectedOption === "surface" && planetData.color,
          }}
        ></div>
      </div>
    </div>
  );
}
export default PlanetOptions;
