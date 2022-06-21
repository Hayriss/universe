import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Form from "../components/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT." text="Contact GLX Ttavel" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
