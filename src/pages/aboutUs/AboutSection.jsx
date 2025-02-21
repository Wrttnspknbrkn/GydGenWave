import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#0F172A] leading-tight">
              About Our CRM
            </h1>
            
            <div className="space-y-6">
              <p className="text-[#94A3B8] font-normal text-lg">
                Our CRM system is designed to simplify customer relationship 
                management, improve sales performance, and enhance collaboration. 
                Centralize all your customer interactions, streamline your workflows, 
                and gain valuable insights to help your business thrive.
              </p>
              
              <p className="text-[#94A3B8] font-normal text-lg">
                Our CRM system is designed to simplify customer relationship 
                management, improve sales performance, and enhance collaboration. 
                Centralize all your customer interactions, streamline your workflows, 
                and gain valuable insights to help your business thrive.
              </p>
            </div>
          </div>

          {/* Right Content - Sales Performance Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/images/sales-performance.png" 
              alt="Sales Performance Dashboard" 
              className="w-full max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
