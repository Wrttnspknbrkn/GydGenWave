import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FiPaperclip, FiBarChart2 } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi2";
import { LuWrench } from "react-icons/lu";
import { IoCheckbox } from "react-icons/io5";
import img from "./assets/image3.png";

const Integration = () => {
  const listItems = [
    {
      title: "Integration",
      desc: "Seamlessly connect with other tools and systems using built-in integrations or APIs.",
    },
    {
      title: "Custom Events",
      desc: "Track specific customer interactions that are important to your business.",
    },
    {
      title: "Datasets",
      desc: "Store and organize large sets of data for easy analysis and reporting.",
    },
    {
      title: "Data Models",
      desc: "Visualize how data points are related to each other for better understanding.",
    },
    {
      title: "Data Enrichment",
      desc: "Automatically add missing data to customer profiles using verified sources.",
    },
  ];

  const integrationItems = [
    {
      icon: <FiPaperclip className="text-[#38BDF8]" />,
      desc: "Seamless integration with third-party platforms.",
    },
    {
      icon: <LuWrench className="text-[#ED4F9D]"/>,
      desc: "Track specific customer interactions.",
    },
    {
      icon: <IoCheckbox className="text-[#34D399]"/>,
      desc: "Ensure data accuracy with built-in tools.",
    },
    {
      icon: <HiOutlineServer className="text-[#38BDF8]"/>,
      desc: "Store and organize large sets of data.",
    },
    {
      icon: <FiBarChart2 className="text-[#ED4F9D]"/>,
      desc: "Visualize how data points are related.",
    },
    {
      icon: <FiPaperclip className="text-[#34D399]"/>,
      desc: "Automatically add missing data to profiles.",
    },
  ];

  return (
    <div className="px-[4rem] pb-[6rem]">
      <div className="mt-[4rem] grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-[40px] font-[700] text-text_primary">
            Integration Capabilities
          </h2>
          <p className="text-[#94A3B8] font-[500] text-[20px] mt-4">
            Seemless integration with third-party platforms.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {listItems.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <CiCircleCheck className="text-primary text-[26px] font-[700]" />
                <p className="text-[16px] text-text_primary">
                  {item.title}:
                  <span className="text-[#94A3B8] ml-2">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={img} alt="Image" className="max-h-[380px]" />
        </div>
      </div>
      <div className="pb-[32rem]">
        <div className="mt-[6rem] px-[4rem] py-[4rem] bg-gray-100 absolute w-screen left-0">
          <h3 className="text-[40px] font-[700] text-center text-text_primary">
            How Integration Capabilities work?
          </h3>
          <div className="grid grid-cols-3 mt-10 gap-16">
            {integrationItems.map((item, index) => (
              <div key={index}>
                <p className="text-[35px] mb-4">{item.icon}</p>
                <h3 className="max-w-[200px] font-normal text-text_primary">{item.desc}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
