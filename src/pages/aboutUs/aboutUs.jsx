import NavBar from "../landing/navbar";
import Footer from "../landing/footer";
import AboutSection from "./AboutSection"; 
import "../landing/landing.scss";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <NavBar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
