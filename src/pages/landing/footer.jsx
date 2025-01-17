import React from "react";
import "./landing.scss";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <div className="news">
          <h2>Join our newsletter</h2>
          <p>
            Stay updated with the latest features <br /> and business tips from
            GydGenWave.
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="tabs flex">
        <div className="products">
          <h3>Product</h3>

          <ul>
            <li>
              <a href="">Inventory Management</a>
            </li>
            <li>
              <a href="">Accounting & Fin. Management</a>
            </li>
            <li>
              <a href="">HRM Module</a>
            </li>
            <li>
              <a href="">Sales & Purchasing</a>
            </li>
            <li>
              <a href="">Reporting & Analytics</a>
            </li>
          </ul>
        </div>
        <div className="community">
          <h3>Community</h3>

          <ul>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Customer Stories</a>
            </li>
            <li>
              <a href="">Upcoming Events</a>
            </li>
            <li>
              <a href="">Forums</a>
            </li>
          </ul>
        </div>
        <div className="learn">
          <h3>Learn</h3>

          <ul>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Tutorials</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Setup Guide</a>
            </li>
            <li>
              <a href="">Support Center</a>
            </li>
          </ul>
        </div>
        <div className="cases">
          <h3>Use Cases</h3>

          <ul>
            <li>
              <a href="">For Small Businesses</a>
            </li>
            <li>
              <a href="">Retail & Inventory Solutions</a>
            </li>
            <li>
              <a href="">Finance & Accounting Automation</a>
            </li>
            <li>
              <a href="">Customer Relationship Management</a>
            </li>
            <li>
              <a href="">Sales & Project Management</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="contact">
        <div className="message">
          <div className="name flex">
            <div className="logo">
              <img src="assets\images\company.svg" alt="" />
            </div>
          </div>
          <p className="copyright">© 2025 GydGenWave. All rights reserved.</p>
          <div className="address">
            <p>Address: 123 Business Hub, Accra, Ghana</p>
            <p>Phone: +233 123 456 789</p>
            <p>Email: support@gydgenwave.com</p>
          </div>
          <div className="terms flex">
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Security</a>
          </div>
        </div>
        <div className="social flex">
          <div className="media">
            <img src="assets\images\facebook1.svg" alt="" />
          </div>
          <div className="media">
            <img src="assets\images\twitter1.svg" alt="" />
          </div>
          <div className="media">
            <img src="assets\images\instagram1.svg" alt="" />
          </div>
          <div className="media">
            <img src="assets\images\linkedin1.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
