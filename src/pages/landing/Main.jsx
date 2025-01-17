import React from "react";
import Hero from "./hero";
import NavBar from "./navbar";
import About from "./about";
import Faq from "./faq";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing">
        <NavBar />
        <Hero />
        <About />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Main;
