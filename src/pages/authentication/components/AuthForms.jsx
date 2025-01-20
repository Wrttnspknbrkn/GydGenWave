import React from "react";
import logo from "/assets/images/company-logo.png";
import { InputField, SelectField } from "../../../components";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { VscEye } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";

const AuthForms = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[600px]">
        <img src={logo} alt="logo" className="w-[110px]" />
        <div className="bg-white p-12 rounded-[14px] mt-8">
          {activeTab == 0 && (
            <>
              <h3 className="text-[#101928] text-[28px] font-semibold">
                Get Started
              </h3>
            </>
          )}
          {activeTab == 1 && (
            <>
              <h3 className="text-[#101928] text-[28px] font-semibold">
                Business Information
              </h3>
            </>
          )}
          {activeTab == 2 && (
            <>
              <h3 className="text-[#101928] text-[28px] font-semibold">
                Create Password
              </h3>
            </>
          )}
          <p className="text-[#667185] mt-2">
            Welcome, kindly provide your information
          </p>
          <>
            <div className="w-full  mt-12">
              <ol className="flex items-center w-full justify-center my-4">
                <li
                  className={`flex w-full justify-between items-center after:content-[''] after:w-full after:h-0.5 after:border-b  after:border-2 after:inline-block relative ${
                    activeTab === 1 || activeTab == 2 || activeTab == 3
                      ? "after:border-primary"
                      : "after:border-[#D0D5DD] "
                  }`}
                >
                  <span
                    className={`flex items-center justify-center text-[12px] w-6 h-6 rounded-full shrink-0 ${
                      activeTab === 0 ||
                      activeTab == 1 ||
                      activeTab == 2 ||
                      activeTab == 3
                        ? "border-2 border-primary text-primary"
                        : "border-2 border-[#D0D5DD] text-[#D0D5DD]"
                    }`}
                  >
                    1
                  </span>
                </li>
                <li
                  className={`flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-b after:border-2 after:inline-block relative ${
                    activeTab === 2 || activeTab == 3
                      ? "after:border-primary "
                      : "after:border-[#D0D5DD]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center text-[12px] w-6 h-6 rounded-full shrink-0 ${
                      activeTab === 1 || activeTab === 2 || activeTab == 3
                        ? "border-2 border-primary text-primary"
                        : "border-2 border-[#D0D5DD] text-[#D0D5DD]"
                    }`}
                  >
                    2
                  </span>
                </li>
                <li
                  className={`flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:border-b after:border-2 after:inline-block relative ${
                    activeTab === 3
                      ? "after:border-primary "
                      : "after:border-[#D0D5DD]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-6 text-[12px] h-6 rounded-full shrink-0 ${
                      activeTab === 2 || activeTab === 3
                        ? "border-2 border-primary text-primary"
                        : "border-2 border-[#D0D5DD] text-[#D0D5DD]"
                    }`}
                  >
                    3
                  </span>
                </li>
                <li className="flex items-center relative">
                  <span
                    className={`flex items-center text-[12px] justify-center w-6 h-6 rounded-full shrink-0 ${
                      activeTab === 3
                        ? "border-2 border-primary text-primary"
                        : "border-2 border-[#D0D5DD] text-[#D0D5DD]"
                    }`}
                  >
                    4
                  </span>
                </li>
              </ol>
            </div>
          </>
          <>
            {activeTab == 0 && (
              <form action="" className="mt-8 flex flex-col gap-6">
                <InputField
                  label={"First Name"}
                  placeHolder={"Enter First Name"}
                />
                <InputField
                  label={"Last Name"}
                  placeHolder={"Enter Last Name"}
                />
                <InputField
                  label={"Business Email"}
                  placeHolder={"Enter Business Email"}
                  icon={<MdOutlineMail className="text-[#D0D5DD]" />}
                />
                <InputField
                  label={"Phone Number"}
                  placeHolder={"Enter Phone Number"}
                />

                <div className="flex gap-4 items-start">
                  <input type="checkbox" />
                  <p className="text-text_secondary text-[12px]">
                    By signing up you agree to our Terms of Service and Privacy
                    Policy, and confirm that you are at least 18 years old.{" "}
                  </p>
                </div>
                <button
                  className="bg-primary text-white py-4 rounded-[8px] font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(1);
                  }}
                >
                  Next Step
                </button>

                <p className="text-center text-text_secondary text-[12px]">
                  Already have an account?{" "}
                  <span className="text-primary text-[14px] font-medium mr-2 cursor-pointer">
                    Login
                  </span>
                </p>
              </form>
            )}
            {activeTab == 1 && (
              <form action="" className="mt-8 flex flex-col gap-6">
                <InputField
                  label={"Business Name"}
                  placeHolder={"Enter Business Name"}
                />
                <div>
                  <SelectField
                    label={"Primary Business Function"}
                    options={[{ name: "Inventory Management", value: 0 }]}
                  />
                  <p className="text-[12px] text-secondary_text">
                    Choose the primary function your business focuses on. Don’t
                    worry, you can add or use multiple modules after signing in
                    to the dashboard.
                  </p>
                </div>
                <SelectField
                  label={"Business Category"}
                  placeHolder={"Select Category"}
                  options={[{ name: "Inventory Management", value: 0 }]}
                />
                <SelectField
                  label={"Business Type"}
                  placeHolder={"Select Category"}
                  options={[{ name: "Fewer than 10 employees", value: 0 }]}
                />
                <InputField label={"Location"} placeHolder={"Enter Location"} />

                <button
                  className="bg-primary text-white py-4 rounded-[8px] font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(2);
                  }}
                >
                  Next Step
                </button>
                <div className="flex justify-center">
                  <p
                    className=" w-fit text-primary flex justify-center items-center gap-1 text-[14px] font-medium mr-2 cursor-pointer"
                    onClick={() => {
                      setActiveTab(0);
                    }}
                  >
                    <IoIosArrowRoundBack className="text-[16px] text-secondary_text" />
                    <span className="">Go Back</span>
                  </p>
                </div>
              </form>
            )}
            {activeTab == 2 && (
              <form action="" className="mt-8 flex flex-col gap-6">
                <InputField label={"Password"} placeHolder={"Enter Password"} />
                <InputField
                  label={"Confirm Password"}
                  placeHolder={"Confirm Password"}
                  icon={<VscEye className="text-secondary_text" />}
                />
                <div>
                  <p className="text-[#101928] text-[12px]">
                    Your password must have at least:
                  </p>
                  <div className="mt-2">
                    <p className="flex gap-2 items-center text-[#98A2B3]">
                      <FaCheck className="text-[12px]" />{" "}
                      <span className="text-[10px]">8 characters (20 max)</span>
                    </p>
                    <p className="flex gap-2 items-center text-[#98A2B3]">
                      <FaCheck className="text-[12px]" />{" "}
                      <span className="text-[10px]">
                        Uppercase letters and numbers{" "}
                      </span>
                    </p>
                    <p className="flex gap-2 items-center text-[#98A2B3]">
                      <FaCheck className="text-[12px]" />{" "}
                      <span className="text-[10px]">
                        Special characters (Example: # ? ! $ * & @)
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  className="bg-primary text-white py-4 rounded-[8px] font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(3);
                  }}
                >
                  Next Step
                </button>
                <div className="flex justify-center">
                  <p
                    className=" w-fit text-primary flex justify-center items-center gap-1 text-[14px] font-medium mr-2 cursor-pointer"
                    onClick={() => {
                      setActiveTab(1);
                    }}
                  >
                    <IoIosArrowRoundBack className="text-[16px] text-secondary_text" />
                    <span className="">Go Back</span>
                  </p>
                </div>
              </form>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default AuthForms;
