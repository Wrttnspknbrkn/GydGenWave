import React from 'react';
import { CheckCircle } from 'lucide-react';

const MarketingAutomation = () => {
  const marketingFeatures = [
    { 
      title: "Workflows", 
      description: "Build automated workflows to handle repetitive tasks and save time." 
    },
    { 
      title: "Sequences", 
      description: "Set up email or task sequences to nurture leads automatically." 
    },
    { 
      title: "Chat Flows", 
      description: "Automate customer chats with customizable bots that can escalate to human agents." 
    },
    { 
      title: "Surveys", 
      description: "Create surveys to gather feedback and analyze customer satisfaction easily." 
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* First Section: Marketing Automation Tools */}
      <div className="py-20 bg-white transition-colors duration-500 hover:bg-slate-50 group">
        <div className="max-w-7xl mx-auto px-5 transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-lg lg:max-w-xl">
              <h1 className="font-bold text-4xl text-slate-900 mb-4 leading-tight 
                transition-colors duration-300 group-hover:text-blue-600">
                Marketing Automation
              </h1>
              <p className="font-normal text-xl text-slate-400 mb-8 leading-relaxed 
                transition-colors duration-300 group-hover:text-slate-600">
                Email campaigns, automated follow-ups, and social media scheduling.
              </p>
              
              <div className="flex flex-col gap-6">
                {marketingFeatures.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 hover:bg-slate-100 p-3 -m-3 rounded-lg 
                      transition-all duration-300 group/item"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle 
                        size={20} 
                        className="text-blue-600 
                          transition-transform duration-300 group-hover/item:rotate-6 
                          group-hover/item:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 inline mr-1 
                        transition-colors duration-300 group-hover/item:text-blue-600">
                        {item.title}:
                      </h3>
                      <p className="font-normal text-base text-slate-400 inline leading-relaxed 
                        transition-colors duration-300 group-hover/item:text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <img 
                src="/images/laptop-marketing.jpg" 
                alt="Marketing Automation Dashboard" 
                className="max-w-full rounded-lg shadow-lg 
                  transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section: Learn Sales Process */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <img 
          src="/images/discussion.png" 
          alt="Sales Team Meeting" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-medium text-white mb-6">
              Learn how to optimize your sales process
            </h2>
            <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold 
              transition-all duration-300 hover:bg-slate-100 hover:shadow-lg">
              Watch Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomation;