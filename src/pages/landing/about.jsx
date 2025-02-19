import "./landing.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate('/about-us');
  };

  return (
    <div className="about">
      <div className="custom">
        <div className="erp_block flex">
          <div className="erp">CRM System</div>
        </div>
        <h2>Custom CRM for Small Businesses in Ghana</h2>
        <div className="article">
          <div className="content">
            <h4>About the CRM System</h4>
            <p>
              Our CRM system is designed to simplify customer relationship management, improve sales performance, and enhance collaboration. 
              Centralize all your customer interactions, streamline your workflows, and gain valuable insights to help your business thrive.
            </p>
            <div>
            <button onClick={handleLearnMore}>Learn More</button>
            </div>
          </div>
          <div className="gw__image">
            <img
              src="assets\images\gW.png"
              alt="GydgenWave"
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="feature">
        <h2>
          Multi-Feature CRM for your Business, <span>Powered by AI </span> 
        </h2>
        <p className="feature__description">
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
              <h4>Customer Management</h4>
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
              <h4>Lead Management</h4>
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
              <h4>Sales Pipeline Management</h4>
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
              <h4>Marketing Automation </h4>
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
              <h4>Task and Workflow Automation</h4>
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
              <h4>Customer Support Tools</h4>
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
              <h4>Reports and Analytics</h4>
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
              <h4>Integration Capabilities</h4>
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
