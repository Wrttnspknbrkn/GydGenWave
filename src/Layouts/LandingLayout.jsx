import React from "react";
import { Outlet } from "react-router-dom";
import { LandingNav } from "../components";

const LandingLayout = () => {
  return (
    <div>
      <LandingNav />
      <Outlet/>
    </div>
  );
};

export default LandingLayout;
