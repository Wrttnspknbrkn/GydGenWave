import React from "react";
import { Outlet } from "react-router-dom";
import { LandingFooter, LandingNav } from "../components";

const LandingLayout = () => {
  return (
    <div>
      <LandingNav />
      <Outlet />
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
