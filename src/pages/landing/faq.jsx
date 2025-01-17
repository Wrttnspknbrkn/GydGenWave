import React from "react";
import "./landing.scss";

const Faq = () => {
  return (
    <div className="faq">
      <div className="how_it_work">
        <div className="flex erp-block">
          <div className="erp">How it works</div>
        </div>
        <h2>
          Get Started with GydGenWave <br /> in 3 Simple Steps
        </h2>
        <div className="article">
          <div className="content">
            <h4>Steps</h4>
            <ul>
              <li>
                <h6>Choose Your Modules</h6>
                <p>Pick the features you need—start small and scale up</p>
              </li>
            </ul>
            <ul>
              <li>
                <h6>Customize to Fit Your Business</h6>
                <p> Tailor each module to match your specific requirements.</p>
              </li>
            </ul>
            <ul>
              <li>
                <h6>Launch and Grow</h6>
                <p>
                  {" "}
                  Implement the system and experience enhanced productivity.
                </p>
              </li>
            </ul>
            <div>
              <button>Get 30days Free trial</button>
            </div>
          </div>
          <div className="gw"></div>
        </div>
      </div>
      <div className="faqs">
        <h2>Frequently asked questions</h2>
        <p>Find answers to common questions about using GydGenWave</p>
        <div className="faqs__content">
          <div className="faqs__item one">
            <h6>What is GydGenWave?</h6>
            <p>
              GydGenWave is a cutting-edge ERP (Enterprise Resource Planning)
              system tailored for small businesses in Ghana. It offers an
              integrated platform to streamline operations, manage workflows,
              and improve productivity.
            </p>
          </div>
          <div className="faqs__item two">
            <h6>How do I get started?</h6>
            <p>
              Getting started with GydGenWave is straightforward and
              hassle-free. Begin by selecting the modules that best suit your
              business needs—whether it’s CRM for managing customer
              relationships, Inventory Management for tracking stock.
            </p>
          </div>

          <div className="faqs__item three">
            <h6>Is GydGenWave customizable for my business needs?</h6>
            <p>
              Yes, GydGenWave is highly customizable to fit the unique
              requirements of your business. Each module, from CRM to
              Accounting, can be tailored to match your operational processes
              and workflows.
            </p>
          </div>
          <div className="faqs__item four">
            <h6>Is there customer support?</h6>

            <p>
              Absolutely! Our dedicated customer support team is here to help
              you at every stage. Whether you need assistance with setup,
              customization, or troubleshooting, you can count on us for
              reliable and prompt support.
            </p>
          </div>
        </div>
        <p>
          if you couldn't find your favorite questions kindly send us a mail at
        </p>
        <button>hello@gydgenwave.co</button>
      </div>
      <section className="ready-to-ride">
        <div className="ready-to-ride__content">
          <h2>Ready to Ride the Wave of Business Efficiency?</h2>
        </div>
        <button className="ready-to-ride__button">Get 30days Free trial</button>
        <div className="socials">
          <img src="assets\images\social icons.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Faq;
