import React from "react";
import "./landing.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="bg-hero">
        <div className="wave__container flex justify-center">
          <div className="wave">
            <span className="name">
              <img src="/images/fire.png" alt="fire" />
              GydGenWave
            </span>
            <span>Streamline. Optimize. Grow with GydGen CRM.</span>
            <img src="/images/arrow.png" alt="" />
          </div>
        </div>
        <h1>Empower Your Business with an Intelligent CRM Solution</h1>
        <p>
          Transform the way you manage customer relationships with our CRM tailored for small businesses in Ghana. 
          Drive growth, build stronger connections, and boost sales efficiency.
        </p>
        <div className="buttons">
          <button className="buttons__blue">Get 30days Free trial</button>
          <button className="buttons__white">Request a Demo</button>
        </div>
      </div>
      <div className="dashboard">
        <img src="/images/dash.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
