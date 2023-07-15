import React from "react";
import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import MyProjects from "./components/projects/MyProjects";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About title="About me" id="about" />
      <Skills title="My Skills" id="skills" />
      <Services title="Services" id="services" />
      <MyProjects title="My Projects" id="myProjects" />
      <Contacts title="Contacts" id="contacts" />
      <Footer title="Footer" id="footer" />
    </>
  );
}

export default App;
