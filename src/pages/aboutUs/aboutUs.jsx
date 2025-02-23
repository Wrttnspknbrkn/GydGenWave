import Footer from "../landing/footer";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import MeetOurTeamSection from "./MeetOurTeamSection";
import "../landing/landing.scss";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <AboutSection />
      <StatsSection />
      <MeetOurTeamSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
