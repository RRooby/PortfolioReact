import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="Services">
      <div className="div_h">
        <h5>what I offert</h5>
        <h2>Services</h2>
      </div>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>Web development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2 className="service list_icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
