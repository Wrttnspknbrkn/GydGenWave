import React from "react";
import "./landing.scss";
import Hero from "./hero";
import NavBar from "./navbar";
import About from "./about";
import Faq from "./faq";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
