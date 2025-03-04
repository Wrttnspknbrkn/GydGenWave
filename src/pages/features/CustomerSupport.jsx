import React from 'react';
import { CheckCircle } from 'lucide-react';

const CustomerSupport = () => {
  const supportFeatures = [
    {
      title: "Quick Access",
      description: "Pin your most-used features for faster navigation."
    },
    {
      title: "Custom Workspaces",
      description: "Tailored views for roles like Sales and Customer Support, ensuring users see only what's relevant."
    },
    {
      title: "Performance Overview",
      description: "A summary of key metrics, such as recent activities, sales progress, and task deadlines."
    },
    {
      title: "Tickets",
      description: "Manage customer issues using a simple ticketing system. Prioritize and resolve tickets efficiently."
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* First Section: Support Tools */}
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 max-w-lg lg:max-w-xl">
            <h1 className="text-[36px] font-bold text-[#0F172A] mb-4 
              transition-all duration-300 hover:text-[#2563EB] hover:translate-x-1">
              Customer Support Tools
            </h1>
            <p className="text-lg text-[#64748B] mb-8 
              transition-all duration-300 hover:text-[#0F172A]">
              Helpdesk, ticketing, and knowledge base features.
            </p>

            <div className="space-y-5">
              {supportFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group 
                    transition-all duration-300 hover:bg-slate-50 p-2 -m-2 rounded-lg"
                >
                  <CheckCircle 
                    size={24} 
                    className="text-[#2563EB] mt-1 flex-shrink-0 
                      transition-transform duration-300 group-hover:rotate-6" 
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] mr-2 inline
                      transition-colors duration-300 group-hover:text-[#2563EB]">
                      {feature.title}:
                    </h3>
                    <span className="text-lg text-[#64748B] inline
                      transition-colors duration-300 group-hover:text-[#0F172A]">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img 
              src="/images/Thumbnail.jpg" 
              alt="Customer Support Dashboard" 
              className="max-w-full rounded-lg shadow-md 
                transition-all duration-300 hover:shadow-xl hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Second Section: Our Customer Support */}
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-bold text-[#0F172A] mb-4 
            transition-all duration-300 hover:text-[#2563EB] hover:translate-x-1">
            Our Customer Support
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto px-4 
            transition-all duration-300 hover:text-[#0F172A]">
            Manage customer issues using a simple ticketing system. Prioritize and resolve tickets efficiently.
          </p>
        </div>

        <div className="w-full">
          <img 
            src="/images/Customer-Support.jpg" 
            alt="Customer Support Representative" 
            className="w-full object-cover 
              transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;