import React from "react";
import { CheckCircle } from 'lucide-react';
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
      icon: <FiPaperclip className="text-[#38BDF8] w-full h-full" />,
      desc: "Seamless integration with third-party platforms.",
    },
    {
      icon: <LuWrench className="text-[#ED4F9D] w-full h-full"/>,
      desc: "Track specific customer interactions.",
    },
    {
      icon: <IoCheckbox className="text-[#34D399] w-full h-full"/>,
      desc: "Ensure data accuracy with built-in tools.",
    },
    {
      icon: <HiOutlineServer className="text-[#38BDF8] w-full h-full"/>,
      desc: "Store and organize large sets of data.",
    },
    {
      icon: <FiBarChart2 className="text-[#ED4F9D] w-full h-full"/>,
      desc: "Visualize how data points are related.",
    },
    {
      icon: <FiPaperclip className="text-[#34D399] w-full h-full"/>,
      desc: "Automatically add missing data to profiles.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16 lg:pb-24">
      {/* First Section with Subtle Hover and Entrance Animation */}
      <div className="py-12 md:py-16 lg:py-20 bg-white transition-all duration-500 hover:bg-slate-50 group">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-12">
            <div className="flex-1 max-w-full lg:max-w-xl">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-text_primary mb-2 md:mb-4 leading-tight 
                transition-all duration-500 group-hover:text-primary">
                Integration Capabilities
              </h2>
              <p className="text-[#94A3B8] font-medium text-base sm:text-lg md:text-xl mb-4 md:mb-8 leading-relaxed 
                transition-all duration-500 group-hover:text-slate-600">
                Seamless integration with third-party platforms.
              </p>
              
              <div className="flex flex-col gap-4 md:gap-6">
                {listItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2 md:gap-4 group/item 
                      hover:bg-slate-100 p-3 -m-3 rounded-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle 
                        size={24} 
                        className="text-primary 
                          transition-transform duration-300 
                          group-hover/item:rotate-6 
                          group-hover/item:scale-110" 
                      />
                    </div>
                    <div>
                      <span className="font-bold text-sm sm:text-base text-text_primary inline mr-1 
                        transition-colors duration-300 group-hover/item:text-primary">
                        {item.title}:
                      </span>
                      <span className="font-normal text-sm sm:text-base text-[#94A3B8] inline leading-relaxed 
                        transition-colors duration-300 group-hover/item:text-slate-600">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0
              transition-all duration-500 group-hover:scale-105 w-full">
              <img 
                src={img} 
                alt="Integration Dashboard" 
                className="max-h-[380px] w-full object-cover rounded-lg shadow-lg 
                  transition-all duration-500 group-hover:shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section with Enhanced Hover Effects */}
      <div className="mt-12 md:mt-16 lg:mt-24 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 
        bg-slate-50 transition-all duration-500 hover:bg-slate-100 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-text_primary mb-8 md:mb-16 leading-tight 
              transition-all duration-500 hover:text-primary">
              How Integration Capabilities work?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
              {integrationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center sm:items-start group 
                    transition-all duration-500 
                    hover:scale-105 
                    p-4 sm:p-6 
                    rounded-xl 
                    hover:bg-white 
                    hover:shadow-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-2 mb-4 
                    transition-all duration-500 
                    group-hover:rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="font-normal text-sm sm:text-base md:text-lg text-text_primary 
                    transition-colors duration-500 
                    group-hover:text-primary text-center sm:text-left">
                    {item.desc}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;