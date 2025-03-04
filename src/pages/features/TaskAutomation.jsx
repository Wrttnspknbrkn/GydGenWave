import React from 'react';
import { CheckCircle } from 'lucide-react';

const TaskAutomation = () => {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* First Section with Subtle Hover and Entrance Animation */}
      <div className="py-20 bg-white transition-all duration-500 hover:bg-slate-50 group">
        <div className="max-w-7xl mx-auto px-5 transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-lg lg:max-w-xl">
              <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight 
                transition-all duration-500 group-hover:text-blue-600">
                Task & Workflow Automation
              </h1>
              <p className="font-normal text-xl md:text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed 
                transition-all duration-500 group-hover:text-slate-600">
                Assign tasks, create workflows, and notifications.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { title: "Workflows", description: "Build automated workflows to handle repetitive tasks and save time." },
                  { title: "Sequences", description: "Set up email or task sequences to nurture leads automatically." },
                  { title: "Chat Flows", description: "Automate customer chats with customizable bots that can escalate to human agents." },
                  { title: "Surveys", description: "Create surveys to gather feedback and analyze customer satisfaction easily." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group/item 
                    hover:bg-slate-100 p-3 -m-3 rounded-lg transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle size={20} className="text-blue-600 
                        transition-transform duration-300 group-hover/item:rotate-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 inline mr-1 
                        transition-colors duration-300 group-hover/item:text-blue-600">{item.title}:</h3>
                      <p className="font-normal text-base text-slate-400 inline leading-relaxed 
                        transition-colors duration-300 group-hover/item:text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center 
              transition-all duration-500 group-hover:scale-105">
              <img 
                src="/images/task-auto.jpg" 
                alt="Task Automation Dashboard" 
                className="max-w-full rounded-lg shadow-lg 
                  transition-all duration-500 group-hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section with Enhanced Hover Effects */}
      <div className="py-20 bg-slate-50 transition-all duration-500 hover:bg-slate-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center">
            <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-16 leading-tight 
              transition-all duration-500 hover:text-blue-600">
              How Task & Workflow Automation works?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "/images/tools.svg", title: "Automate tasks effortlessly" },
                { icon: "/images/clock.svg", title: "Save time with workflows" },
                { icon: "/images/battery.svg", title: "Nurture leads automatically" },
                { icon: "/images/message-comment.svg", title: "Engage customers with chat bots" },
                { icon: "/images/search.svg", title: "Gather insights with surveys" },
                { icon: "/images/server.svg", title: "Collaborate seamlessly" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center group 
                    transition-all duration-500 
                    hover:scale-105 
                    p-6 
                    rounded-xl 
                    hover:bg-white 
                    hover:shadow-lg"
                >
                  <div className="rounded-full p-2 mb-4 
                    transition-all duration-500 
                    group-hover:rotate-12">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-10 h-10 
                        transition-transform duration-500 
                        group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 
                    transition-colors duration-500 
                    group-hover:text-blue-600">
                    {item.title}
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

export default TaskAutomation;