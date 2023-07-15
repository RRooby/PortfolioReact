import React from "react";
import ".//footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <a href="#" className="footer_logo">
          ROOBY J
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <li>
          <a href="#contacts">Contacts</a>
        </li>

        <div className="footer_socials">
          <a href="https://www.facebook.com/jacksy.joseph.7">
            <FiFacebook />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://api.whatsapp.com/message/N755IK4ODERCC1?autoload=1&app_absent=0">
            <IoLogoWhatsapp />
          </a>
        </div>

        <div className="tooter-copyright">
          <small>&copy; ROOBY portfolio. My projects</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
