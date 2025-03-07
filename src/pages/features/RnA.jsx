import React from "react";
import { CheckCircle } from 'lucide-react';
import img from "./assets/image1.png";

const RnA = () => {
  const listItems = [
    {
      title: "Dashboards",
      desc: "Customize dashboards to display the data that matters most to you.",
    },
    {
      title: "Marketing Analytics",
      desc: "Measure campaign performance and get suggestions to improve results.",
    },
    {
      title: "Sales Analytics",
      desc: "Track sales activities, conversion rates, and revenue trends in real time.",
    },
    {
      title: "Service Analytics",
      desc: "Monitor customer support performance, such as response times and resolution rates.",
    },
    {
      title: "Forecasts",
      desc: "Use past data to predict future sales and make informed decisions.",
    },
    {
      title: "Goals",
      desc: "Set and track goals for teams and individuals with progress indicators.",
    },
  ];
  
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 pb-12 md:pb-16 lg:pb-24 w-full overflow-x-hidden">
      <div className="mt-8 md:mt-12 lg:mt-16 grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 transition-colors duration-500 hover:bg-slate-50 group py-8 md:py-12 lg:py-16 px-4 rounded-lg">
        <div className="transition-transform duration-500 group-hover:-translate-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text_primary transition-colors duration-300 group-hover:text-primary">
            Reports & Analytics
          </h2>
          <p className="text-[#94A3B8] font-medium text-base sm:text-lg md:text-xl mt-2 md:mt-4 transition-colors duration-300 group-hover:text-slate-600">
            Sales performance and customer insights.
          </p>
          <div className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-6">
            {listItems.map((item, index) => (
              <div 
                key={index} 
                className="flex gap-2 md:gap-4 items-start hover:bg-slate-100 p-3 -m-3 rounded-lg transition-all duration-300 group/item"
              >
                <CheckCircle 
                  className="text-primary text-lg sm:text-xl md:text-2xl flex-shrink-0 mt-1 transition-transform duration-300 group-hover/item:rotate-6 group-hover/item:scale-110" 
                />
                <div>
                  <span className="text-sm sm:text-base md:text-lg text-text_primary font-bold inline mr-1 transition-colors duration-300 group-hover/item:text-primary">
                    {item.title}:
                  </span>
                  <span className="text-sm sm:text-base text-[#94A3B8] inline transition-colors duration-300 group-hover/item:text-slate-600">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-6 lg:mt-0">
          <img 
            src={img} 
            alt="Reports and Analytics Dashboard" 
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105" 
          />
        </div>
      </div>
      
      <div className="py-20 bg-slate-50 transition-colors duration-500 hover:bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-blue-600 text-white rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
            {/* Decorative yellow circles */}
            <div 
              className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full 
                        -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: '#FFECA8' }}
            />
            <div 
              className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 rounded-full 
                        translate-x-1/2 translate-y-1/2"
              style={{ backgroundColor: '#FFECA8' }}
            />
            
            {/* Content Container */}
            <div className="relative z-10 px-4 py-12 sm:px-16 md:py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto 
                transition-colors duration-300 hover:text-blue-100">
                Ready to boost your sales?
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-80 
                transition-opacity duration-300 hover:opacity-100">
                Join thousands of businesses using CRM to enhance their customer relationships.
              </p>
              
              <button 
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full 
                          text-base md:text-lg
                          transition-all duration-300 
                          hover:bg-blue-50 hover:shadow-lg 
                          active:scale-95 
                          focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RnA;