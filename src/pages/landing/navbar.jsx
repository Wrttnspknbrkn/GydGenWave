import { useState } from "react";
import "./landing.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Features", path: "/features" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="name">
        <img src="/images/company.svg" alt="GydgenWave" onClick={() => handleNavigation("/")} />
      </div>
      <div className={`auth ${isMenuOpen ? 'hidden' : ''}`}>
        <div className="login" onClick={() => navigate("/login")}>
          Login
        </div>
        <button onClick={() => navigate("/sign-up")}>Get Started</button>
      </div>
      <div className="menu">
        <IconButton 
          color="inherit" 
          aria-label="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav__links">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className={`mobile-nav__link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </div>
          ))}
          <div className="mobile-nav__auth">
            <div 
              className="mobile-nav__login"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </div>
            <button 
              className="mobile-nav__button"
              onClick={() => handleNavigation("/sign-up")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;