import NavBar from "../landing/navbar";
import Footer from "../landing/footer";
import "../landing/landing.scss"; 
import "./aboutUs.scss"; 

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <NavBar />
      
      <div className="about-us-container">
        {/* Placeholder for future content */}
        <div className="about-us-header">
          <h1>About Us</h1>
          <p className="subtitle">Content coming soon</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;