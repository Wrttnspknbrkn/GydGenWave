import React from "react";
import "./landing.scss";

const About = () => {
  return (
    <div className="about">
      <div className="custom">
        <div className="erp_block flex">
          <div className="erp">ERP System</div>
        </div>
        <h2>Custom ERP Development Plan for Small Businesses in Ghana</h2>
        <div className="article">
          <div className="content">
            <h4>About the ERP System</h4>
            <p>
              Our ERP system is designed to enhance operational efficiency and
              streamline business workflows. By adopting a modular approach, we
              ensure businesses can scale and adapt quickly, with each module
              addressing a specific business need. Our solution is built with
              the latest technologies to support your growth and success
            </p>
            <div>
              <button>Learn More</button>
            </div>
          </div>
          <div className="gw__image">
            <img
              src="assets\images\gW.png"
              alt="GydgenWaver"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="feature">
        <h2>
          Empower Your Business with These Powerful <span>Features </span>
        </h2>
        <p class="feature__description">
          GydGenWave offers an integrated suite of tools to enhance efficiency,
          reduce costs, and scale your business.
        </p>
        <div className="first__cards">
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Smart CRM</h4>
              <p>
                Build strong customer relationships with lead tracking, sales
                pipelines, and automated communication
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Efficient Inventory Management</h4>
              <p>
                Track stock levels, manage vendors, and reduce overstocking with
                ease.
              </p>
            </div>
          </div>
        </div>
        <div className="second__cards">
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Simplified Accounting</h4>
              <p>
                Keep your financials in check with budgeting, invoicing, and
                detailed reports.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Human Resource Tools </h4>
              <p>Streamline payroll, employee management, and HR tasks.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Sales and Purchasing</h4>
              <p>Close deals faster with a seamless purchasing process</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Project Management</h4>
              <p>Plan, track, and deliver successful projects.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Analytics & Reportingg</h4>
              <p>Make data-driven decisions with real-time insights.</p>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img
                src="assets\images\card1.svg"
                alt="feature1"
                className="image"
              />
            </div>
            <div className="card__content">
              <h4>Content Management System </h4>
              <p>
                Create, organize, and manage digital content effortlessly,
                enhancing your online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
