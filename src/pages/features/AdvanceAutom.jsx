import React from "react";
import { CheckCircle } from 'lucide-react';
import img from "./assets/image5.png";
import img2 from "./assets/image6.png";

const AdvanceAutom = () => {
  const listItems = [
    {
      title: "Intelli Predict",
      desc: "Predictive analytics to forecast lead conversions and sales trends.",
    },
    {
      title: "Smart Chat",
      desc: "AI-powered chatbots to automate customer interactions and FAQs.",
    },
    {
      title: "Sentiment Sense",
      desc: "Sentiment analysis to evaluate customer feedback.",
    },
    {
      title: "Lead Flow Automation",
      desc: "Lead nurturing workflows to engage customers at every stage.",
    },
    {
      title: "Action Triggers",
      desc: "Trigger-based actions for automated follow-ups.",
    },
    {
      title: "Smart Scheduler",
      desc: "AI-recommended times for campaigns and meetings.",
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
                Advanced Automation
              </h2>
              <p className="text-[#94A3B8] font-medium text-base sm:text-lg md:text-xl mb-4 md:mb-8 leading-relaxed 
                transition-all duration-500 group-hover:text-slate-600">
                Intelli Predict, Smart Chat, Sentiment Sense, Lead Flow, Action
                Triggers &amp; Smart Scheduler.
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
                alt="Automation Dashboard" 
                className="max-h-[430px] w-full object-cover rounded-lg shadow-lg 
                  transition-all duration-500 group-hover:shadow-xl" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section with Full-Width Video Banner */}
      <div className="mt-12 md:mt-16 lg:mt-24 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 relative group">
        <div className="w-full overflow-hidden relative">
          <img 
            src={img2} 
            alt="Sales Process Optimization" 
            className="w-full object-cover min-h-[300px] md:min-h-[400px] lg:min-h-[500px]
              transition-all duration-700 transform group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 
            flex flex-col items-center justify-center text-white text-center p-4
            transition-all duration-500 group-hover:bg-opacity-50">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
              mb-6 md:mb-8 px-4 transition-all duration-500 
              group-hover:transform group-hover:translate-y-1">
              Learn how to optimize your sales process
            </h3>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-xl 
              transition-all duration-300 
              hover:bg-primary hover:text-white hover:shadow-lg 
              transform group-hover:scale-105">
              Watch Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceAutom;