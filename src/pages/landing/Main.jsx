import React from "react";
import Hero from "./hero";
import About from "./about";
import Faq from "./faq";
import { useNavigate } from "react-router-dom";
import "./landing.scss";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing">
        <Hero />
        <About />
        <Faq />
      </div>
    </>
  );
};

export default Main;
