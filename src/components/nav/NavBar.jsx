import React from "react";
import { Link } from "react-scroll";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="nav_container">
      <div className="n-left">
        <div className="n-name">
          <li>Home</li>
        </div>
      </div>

      <div className="n-right">
        <div className="list">
          <ul>
            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <li>About Me</li>
            </Link>
            <Link
              spy={true}
              to="Skills"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Skills</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="MyProjects"
              smooth={true}
              activeClass="activeClass"
            >
              <li>My Projects</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contacts" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contacts</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
