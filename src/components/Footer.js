import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer w-full py-24 bg-black opacity-70">
      <div className="max-w-[1140px] mx-auto grid md:grid-cols-2 gap-10">
        <div className="w-full h-full flex flex-col p-4 m-auto md:text-right">
          <h3>About the company</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            tempore debitis voluptatibus natus et facilis aliquid quas magni
            quae ipsa?
          </p>
          <br />
          <div className="flex md:justify-end">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col p-4">
          <div className="flex items-center">
            <FaSearchLocation
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p className="pb-2">123 Acne St.</p>
              <h3 className="pt-0">Houston, Tx</h3>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <h3>1-450-45-8569</h3>
          </div>

          <div className="flex items-center">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <h3>hayris@galaxy.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
