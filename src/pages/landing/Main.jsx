import React from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center text-[4rem] font-[600] text-gray-500 h-screen">
        <Switch {...label} disabled defaultChecked />
        <Button variant="contained" onClick={() => navigate("/login")}>
          Get start
        </Button>
        <Switch {...label} disabled />
      </div>
    </>
  );
};

export default Main;
