import "./landing.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const handleLearnMore = () => {
    navigate('/about-us');
  };
  
  const handleViewFeatures = () => {
    navigate('/features');
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
                pipelines, and automated communication tools. Store complete customer
                profiles and interaction history all in one place.
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
                Capture, score, and nurture leads through your sales funnel. Prioritize
                high-value prospects and never let potential customers fall through the cracks
                with our advanced tracking system.
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
                Visualize and optimize your entire sales process from lead to close.
                Track deal progress, forecast revenue, and identify bottlenecks to
                improve conversion rates.
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
              <h4>Marketing Automation</h4>
              <p>
                Schedule campaigns, segment audiences, and track performance metrics.
                Create personalized marketing messages that resonate with your target
                customers to drive engagement.
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
              <h4>Task and Workflow Automation</h4>
              <p>
                Streamline repetitive tasks with customizable workflows. Set up triggered
                actions, automated follow-ups, and task assignments to increase team
                productivity and close deals faster.
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
              <h4>Customer Support Tools</h4>
              <p>
                Manage support tickets, track resolution times, and maintain customer
                satisfaction. Integrate customer service with sales data for a complete
                view of your customer relationships.
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
              <h4>Reports and Analytics</h4>
              <p>
                Generate customizable dashboards and reports to track KPIs and identify
                trends. Leverage data-driven insights to optimize your strategy and make
                informed business decisions.
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
              <h4>Integration Capabilities</h4>
              <p>
                Connect seamlessly with your existing business tools including email,
                calendars, accounting software, and e-commerce platforms. Create a
                unified ecosystem for your business operations.
              </p>
            </div>
          </div>
        </div>
        <button className="view-features-btn" onClick={handleViewFeatures}>
          View All Features
        </button>
      </div>
    </div>
  );
};

export default About;