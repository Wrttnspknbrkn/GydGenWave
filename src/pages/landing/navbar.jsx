import React from "react";
import "./landing.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="name">
        <img src="assets\images\company.svg" alt="GydgenWaver" />
      </div>
      <div className="auth">
        <div className="login">Login</div>
        <button>Get Started</button>
      </div>
      <div className="menu">
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
