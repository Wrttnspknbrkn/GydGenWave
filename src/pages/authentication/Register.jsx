import React, { useEffect, useState } from "react";
import InfoSide from "./components/InfoSide";
import AuthForms from "./components/AuthForms";
import logo from "/images/company-logo.png";
import email from "./assets/email.png";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    scrollTo(0, 0);
  }, [activeTab]);
  return (
    <div className="min-h-screen grid grid-cols-12">
      {activeTab != 3 ? (
        <>
          <div className="hidden lg:flex lg:col-span-4">
            <InfoSide formStep={activeTab} />
          </div>
          <div className="col-span-12 lg:col-span-8 bg-gray-100 p-6 lg:p-12">
            <AuthForms activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </>
      ) : (
        <div className="bg-gray-100 w-screen flex p-12 justify-center items-center">
          <div className="w-[600px]">
            <img src={logo} alt="logo" className="w-[110px]" />
            <div className=" bg-white rounded-[14px] p-6 md:p-12 mt-8 flex flex-col items-center">
              <img src={email} alt="img" className="h-[150px]" />
              <h3 className="font-semibold text-[28px] text-center">
                You're almost there!
              </h3>
              <div className="mt-4">
                <p className="text-secondary_text text-center">
                  A verification link has been sent to your email. Please verify
                  your email to finalize the process. Didn't receive the code?
                </p>
                <p className="text-primary text-center mt-2 cursor-pointer">
                  Resend available in (2s)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
