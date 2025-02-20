import NavBar from "../landing/navbar";
import Footer from "../landing/footer";
import "../landing/landing.scss"; 
import "./features.scss"; 

const Features = () => {
  return (
    <div className="features-page">
      <NavBar />
      
      <div className="features-container">
        {/* Placeholder for future content */}
        <div className="features-header">
          <h1>Features</h1>
          <p className="subtitle">Content coming soon</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Features;