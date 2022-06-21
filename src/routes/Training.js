import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import TrainingSection from "../components/TrainingSection";
import Navbar from "../components/Navbar";

function Training() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING" text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
      <Footer />
    </div>
  );
}

export default Training;
