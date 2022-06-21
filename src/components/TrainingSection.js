import React from "react";
import Moon from "../assets/moon.jpg";
import Pod from "../assets/5.jpg";
import { Link } from "react-router-dom";

function TrainingSection() {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, fuga
          voluptates illo libero fugit laudantium. Dignissimos fugit doloribus
          esse et?
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} alt="moon" className="img" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="moon" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
