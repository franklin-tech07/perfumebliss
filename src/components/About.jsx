import React from "react";
import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="aboutSection">
        <h1>About</h1>
        <p>
          At Perfume Bliss, we believe every scent tells a story. Curated with
          passion and crafted with care, our perfumes are designed to inspire
          confidence, elegance, and unforgottable.
        </p>
      </div>
      <div className="contacts">
        <div className="Cicons">
          <a
            href="https:wa.me/23232214003"
            target="_blank"
            rel="noopener noreferre"
            className="C-icon"
          >
            <FaFacebook color="#0866ff" />
          </a>
          <a
            href="https:wa.me/23232214003"
            target="_blank"
            rel="noopener noreferre"
            className="C-icon"
          >
            <FaInstagram color="#e93362" />
          </a>
          <a
            href="https:wa.me/23232214003"
            target="_blank"
            rel="noopener noreferre"
            className="C-icon"
          >
            <FaWhatsapp color="#65cf72" />
          </a>
          <a
            href="https:wa.me/23232214003"
            target="_blank"
            rel="noopener noreferre"
            className="C-icon"
          >
            <FaTiktok color="black" />
          </a>
        </div>
        <p>@perfumebliss.ig</p>
        <p>@perfumebliss.fb</p>
        <p>+232 32214003</p>
        <p>@perfumebliss.tt</p>
      </div>
      <div className="footer">
        <p>Location: No. 22 Lumely Mall, Freetown</p>
        <p>info@perfumebliss.com</p>
      </div>
    </>
  );
};

export default About;
