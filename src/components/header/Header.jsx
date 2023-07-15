import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me2.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jacquessy Joseph</h1>
        <ul className="dynamic-txts">
          <li>
            <span>Fullstack Developper</span>
          </li>
          <li>
            <span>Front end</span>
          </li>
          <li>
            <span>Back end</span>
          </li>
        </ul>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
