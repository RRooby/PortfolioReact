import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { BsPersonAdd } from "react-icons/bs";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";

const About = () => {
  return (
    <section id="About">
      <h5>Get To know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsPersonAdd />
              <h5>Experience</h5>
              <small></small>

              <div className="know_me">
                <div className="overlay"></div>
                <div className="content"></div>
              </div>
            </article>

            <article className="about_card">
              <FaRegFolderOpen />
              <h5>Completed</h5>
              <small></small>
            </article>

            <article className="about_card">
              <AiOutlineContacts />
              <h5>Support</h5>
            </article>
          </div>

          <p>
            Hello, I'm Jacquessy Joseph, full stack developper, I have worked
            with technologies such as: javaScript, html, css, reactjs, nodejs,
            redux among others... I have no work experience, but with the
            experience I have, I can work, I also learn quickly.Thank you...
          </p>

          <a href="#contacts" className="btn btn_primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
