import React from "react";
import "../../pages/landing/landing.scss";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="newsletter">
        <div className="news">
          <h2>Join our newsletter</h2>
          <p>
            Get the latest CRM insights, success stories, <br /> and product
            updates from GydGenWave CRM.
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Enter your business email" />
          <button>Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="tabs flex">
        <div className="products">
          <h3>Features</h3>
          <ul>
            <li>
              <a href="">Customer Management</a>
            </li>
            <li>
              <a href="">Lead Management</a>
            </li>
            <li>
              <a href="">Sales Pipeline</a>
            </li>
            <li>
              <a href="">Marketing Automation</a>
            </li>
            <li>
              <a href="">Analytics & Reporting</a>
            </li>
          </ul>
        </div>
        <div className="community">
          <h3>Community</h3>
          <ul>
            <li>
              <a href="">Success Stories</a>
            </li>
            <li>
              <a href="">CRM Blog</a>
            </li>
            <li>
              <a href="">Webinars</a>
            </li>
            <li>
              <a href="">User Community</a>
            </li>
          </ul>
        </div>
        <div className="learn">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="">Getting Started Guide</a>
            </li>
            <li>
              <a href="">Video Tutorials</a>
            </li>
            <li>
              <a href="">Knowledge Base</a>
            </li>
            <li>
              <a href="">API Documentation</a>
            </li>
            <li>
              <a href="">Support Center</a>
            </li>
          </ul>
        </div>
        <div className="cases">
          <h3>Solutions</h3>
          <ul>
            <li>
              <a href="">Small Business CRM</a>
            </li>
            <li>
              <a href="">Sales Teams</a>
            </li>
            <li>
              <a href="">Marketing Teams</a>
            </li>
            <li>
              <a href="">Customer Service</a>
            </li>
            <li>
              <a href="">Remote Teams</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="contact">
        <div className="message">
          <div className="name flex">
            <div className="logo">
              <img src="/images/company.svg" alt="GydGenWave CRM" />
            </div>
          </div>
          <p className="copyright">
            © {currentYear} GydGenWave CRM. All rights reserved.
          </p>
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
          <a href="" className="media">
            <img src="/images/facebook1.svg" alt="Facebook" />
          </a>
          <a href="" className="media">
            <img src="/images/twitter1.svg" alt="Twitter" />
          </a>
          <a href="" className="media">
            <img src="/images/instagram1.svg" alt="Instagram" />
          </a>
          <a href="" className="media">
            <img src="/images/linkedin1.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
