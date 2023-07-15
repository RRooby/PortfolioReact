import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://whatsaPP.com" target="_blank">
        <TbBrandWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
