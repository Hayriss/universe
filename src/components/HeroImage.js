import React, { Component } from "react";

class HeroImage extends Component {
  render() {
    return (
      <div
        className="bg-black bg-opacity-60 w-full h-[50vh] relative
      before:content-[''] before:bg-hero-img before:bg-opacity-50 before:bg-no-repeat before:bg-center before:bg-cover before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl">{this.props.heading}</h1>
          <p className="text-2xl">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
