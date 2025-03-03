import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "../landing/landing.scss";
import "./features.scss";

const Features = () => {
  const [showAll, setShowAll] = useState(false);

  const features = [
    {
      icon: "/images/customer-management.svg",
      title: "Customer Management",
      description: "Keep all your customer info in one spot, super easy!",
      link: "/customer-management",
    },
    {
      icon: "/images/lead-management.svg",
      title: "Lead Management",
      description: "Efficiently manage your leads in one CRM!",
      link: "/lead-management",
    },
    {
      icon: "/images/sales-pipeline.svg",
      title: "Sales Pipeline Management",
      description: "Streamline your sales pipeline to boost conversions!",
      link: "/sales-pipeline",
    },
    {
      icon: "/images/marketing-automation.svg",
      title: "Marketing Automation",
      description: "Automate tasks to simplify marketing and track leads!",
      link: "/marketing",
    },
    {
      icon: "/images/task-automation.svg",
      title: "Task & Workflow Automation",
      description: "Boost productivity with CRM automation.",
      link: "/automation",
    },
    {
      icon: "/images/customer-support.svg",
      title: "Customer Support Tools",
      description: "Boost support with CRM tools for faster responses!",
      link: "/support",
    },
    {
      icon: "/images/reports-analytics.svg",
      title: "Reports & Analytics",
      description: "Get insights into your business with CRM analytics.",
      link: "/reports-and-analytics",
    },
    {
      icon: "/images/integration.svg",
      title: "Integration Capabilities",
      description: "Easily import all your customer info into your CRM!",
      link: "/integration",
    },
    {
      icon: "/images/ai-features.svg",
      title: "AI-Powered Features",
      description: "Use AI in your CRM to enhance customer interactions!",
      link: "/ai-powered-features",
    },
    {
      icon: "/images/advanced-automation.svg",
      title: "Advanced Automation",
      description: "CRM automation enhances tasks and relationships.",
      link: "/advanced-automation",
    },
  ];

  const visibleFeatures = showAll ? features : features.slice(0, 6);

  return (
    <div className="features-page">
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
            {showAll ? "See Fewer" : "See All"}{" "}
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
