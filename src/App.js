import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import FrontEndProject from "./pages/FrontEndProject";
import Introduction from "./pages/Introduction";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Education />
      <Skills />
      <FrontEndProject />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
