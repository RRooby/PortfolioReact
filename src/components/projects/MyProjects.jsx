import React from "react";
import "./myProjects.css";
import IMG1 from "../../assets/ecm.jpg";
import IMG2 from "../../assets/app.jpg";
import IMG3 from "../../assets/phase.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const MyProjects = () => {
  return (
    <section id="MyProjects">
      <h5>My Realisation</h5>
      <h2>My Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>React E-commerce</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/RRooby/EcmReact.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://splendid-haupia-7cf6ba.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Users Lists</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://amazing-flan-13dbbf.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Show sentences</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/RRooby/Project-number-1"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://illustrious-kelpie-5bd4df.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribbble.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MyProjects;
