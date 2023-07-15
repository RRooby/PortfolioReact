import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="div_skill">
        <div className="div_hs">
          <h5>What Skills I have</h5>
          <h2>My Skills</h2>
        </div>

        <div className="container skill_container">
          <div className="skill_frontend">
            <h3>Frontend development</h3>
            <div className="skill_content">
              <article className="skill_details">
                <BsFillPatchCheckFill className="skill_details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Skills</small>
                </div>
              </article>

              <article className="skill_details">
                <BsFillPatchCheckFill className="skill_details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Skills</small>
                </div>
              </article>

              <article className="skill_details">
                <BsFillPatchCheckFill className="skill_details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>

              <article className="skill_details">
                <BsFillPatchCheckFill className="skill_details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light"></small>
                </div>
              </article>

              <article className="skill_details">
                <BsFillPatchCheckFill className="skill_details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Skills</small>
                </div>
              </article>
            </div>
          </div>

          <div className="skill_backend">
            <h3>Backend development</h3>
            <article className="skill_details">
              <BsFillPatchCheckFill className="skill_details-icon" />
              <div>
                <h4>Node JS </h4>
                <small className="text-light">Skills</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
