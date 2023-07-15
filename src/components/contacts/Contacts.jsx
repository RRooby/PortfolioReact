import React from "react";
import "./contacts.css";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cqj1zuf",
      "template_zzjuvoa",
      form.current,
      "UGhPU13jjDDKKwqb3"
    );
    e.target.reset();
  };
  return (
    <section id="Contacts">
      <div className="dv">
        <div className="divs">
          <h5>Get In Touch</h5>
          <h2>Contacts me</h2>
        </div>

        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <HiOutlineMail className="contact_option-icon" />
              <h4>Email</h4>
              <h5>roobyst03@gmail.com</h5>
              <a href="mailto:roobyst03@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <HiOutlineMail className="contact_option-icon" />
              <h4>Ez</h4>
              <h5>roobyst03@gmail.com</h5>
              <a href="mailto:roobyst03@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <TbBrandWhatsapp className="contact_option-icon" />
              <h4>WhatsApp</h4>
              <h5>+18093610321</h5>
              <a
                href="http://api.whatsapp/send?phone+18093610321"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn_primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

<div></div>;
