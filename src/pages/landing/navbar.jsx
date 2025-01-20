import React from "react";
import "./landing.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="name">
        <img src="assets\images\company.svg" alt="GydgenWave" />
      </div>
      <div className="auth">
        <div className="login" onClick={() => navigate("/login")}>
          Login
        </div>
        <button onClick={() => navigate("/sign-up")}>Get Started</button>
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
