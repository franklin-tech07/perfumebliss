import React from "react";
import "../App.css";
import Logo from "../assets/Logo.png";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div id="heroSection">
        <div className="Img">
          <img src="" alt="" />
        </div>
        <div class="hero">
          <img src={Logo} alt="" />
          <p>
            Indulge in art of scent - discover perfumes that define your
            elegence
          </p>
          <a href="https://wa.link/wrqx73" target="_blank">
            <button>Order Now</button>
          </a>
          <div className="W-icon">
            <a
              href="https://wa.link/wrqx73"
              target="_blank"
              rel="noopener noreferre"
              className="whatsapp-icon"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
