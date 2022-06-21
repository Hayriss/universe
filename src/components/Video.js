import React from "react";
import { Link } from "react-router-dom";
import universeVideo from "../assets/video.mp4";

function Video() {
  return (
    <div className="h-screen w-full object-contain">
      <video autoPlay loop muted id="video">
        <source src={universeVideo} type="video/mp4" />
      </video>

      <div className="w-full h-full top-[40vh] text-center absolute m-auto">
        <h1 className="text-5xl md:text-6xl">Journey to The Universe</h1>
        <p className="text-xl md:text-2xl font-extralight uppercase mb-6">
          World's first civilian space travel.
        </p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
