import { useState } from 'react';
import NavBar from "../landing/navbar";
import Footer from "../landing/footer";
import { ArrowRight } from 'lucide-react';
import "../landing/landing.scss";
import "./features.scss";

const Features = () => {
  const [showAll, setShowAll] = useState(false);
  
  const features = [
    {
      icon: "/assets/images/customer-management.svg",
      title: "Customer Management",
      description: "Keep all your customer info in one spot, super easy!",
      link: "/features/customer-management"
    },
    {
      icon: "/assets/images/lead-management.svg",
      title: "Lead Management", 
      description: "Efficiently manage your leads in one CRM!",
      link: "/features/lead-management"
    },
    {
      icon: "/assets/images/sales-pipeline.svg",
      title: "Sales Pipeline Management",
      description: "Streamline your sales pipeline to boost conversions!",
      link: "/features/sales-pipeline"
    },
    {
      icon: "/assets/images/marketing-automation.svg",
      title: "Marketing Automation",
      description: "Automate tasks to simplify marketing and track leads!",
      link: "/features/marketing"
    },
    {
      icon: "/assets/images/task-automation.svg",
      title: "Task & Workflow Automation",
      description: "Boost productivity with CRM automation.",
      link: "/features/automation"
    },
    {
      icon: "/assets/images/customer-support.svg",
      title: "Customer Support Tools",
      description: "Boost support with CRM tools for faster responses!",
      link: "/features/support"
    },
    {
      icon: "/assets/images/reports-analytics.svg",
      title: "Reports & Analytics",
      description: "Get insights into your business with CRM analytics.",
      link: "/features/analytics"
    },
    {
      icon: "/assets/images/integration.svg",
      title: "Integration Capabilities",
      description: "Easily import all your customer info into your CRM!",
      link: "/features/integration"
    },
    {
      icon: "/assets/images/ai-features.svg",
      title: "AI-Powered Features",
      description: "Use AI in your CRM to enhance customer interactions!",
      link: "/features/ai"
    },
    {
      icon: "/assets/images/advanced-automation.svg",
      title: "Advanced Automation",
      description: "CRM automation enhances tasks and relationships.",
      link: "/features/advanced-automation"
    }
  ];

  const visibleFeatures = showAll ? features : features.slice(0, 6);

  return (
    <div className="features-page">
      <NavBar />
      
      <div className="features-container">
        <div className="features-header">
          <h1>Multi-Feature CRM for your Business, powered by AI</h1>
          <p className="subtitle">
            Our CRM platform includes key features like Customer Management, 
            Lead Management, and Sales Pipeline, plus Automation tools for 
            marketing and Customer Support for service.
          </p>
        </div>

        <div className="features-grid">
          {visibleFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link} className="learn-more">
                  Learn More <ArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="see-fewer-container">
          <button 
            className="toggle-view-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'See Fewer' : 'See All'} <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;