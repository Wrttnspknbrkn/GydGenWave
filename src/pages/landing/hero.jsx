import React from "react";
import "./landing.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg-hero">
        <div className="wave__container flex justify-center">
          <div className="wave">
            <span className="name">
              <img src="assets\images\fire.png" alt="fire" />
              GydGenWave
            </span>
            <span>Streamline. Optimize. Grow with GydGen ERP.</span>
            <img src="assets\images\arrow.png" alt="" />
          </div>
        </div>
        <h1>Empower Your Business with a Seamless ERP System</h1>
        <p>
          Transform your operations with our tailor-made ERP solutions for small
          businesses in Ghana. Boost efficiency, streamline processes, and
          increase productivity.
        </p>
        <div className="buttons">
          <button className="buttons__blue">Get 30days Free trial</button>
          <button className="buttons__white">Request a Demo</button>
        </div>
      </div>
      <div className="dashboard">
        <img src="assets\images\dash.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
