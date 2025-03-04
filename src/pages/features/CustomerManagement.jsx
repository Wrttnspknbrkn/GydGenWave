import React from 'react';
import { CheckCircle } from 'lucide-react';

const CustomerManagement = () => {
  const customerFeatures = [
    { 
      title: "Contacts", 
      description: "Store and organize all customer information in one place. View interaction history for better follow-ups." 
    },
    { 
      title: "Companies", 
      description: "Group contacts under their respective organizations and access relevant data effortlessly." 
    },
    { 
      title: "Deals", 
      description: "Track ongoing sales opportunities with an easy-to-use visual pipeline." 
    },
    { 
      title: "Tickets", 
      description: "Manage customer issues using a simple ticketing system. Prioritize and resolve tickets efficiently." 
    },
    { 
      title: "Lists", 
      description: "Create and manage groups of contacts for targeted actions, such as email campaigns or follow-ups." 
    },
    { 
      title: "Inbox", 
      description: "A single place for emails, chats, and social media messages to ensure no communication is missed." 
    },
    { 
      title: "Calls", 
      description: "Make and track calls directly in the CRM. Record and review conversations for better customer insights." 
    },
    { 
      title: "Tasks", 
      description: "Organize daily to-dos and set reminders to stay on top of priorities." 
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* First Section: Customer Management */}
      <div className="py-20 bg-white transition-colors duration-500 hover:bg-slate-50 group">
        <div className="max-w-7xl mx-auto px-5 transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-lg lg:max-w-xl">
              <h1 className="font-bold text-4xl text-slate-900 mb-4 leading-tight 
                transition-colors duration-300 group-hover:text-blue-600">
                Customer Management
              </h1>
              <p className="font-normal text-xl text-slate-400 mb-8 leading-relaxed 
                transition-colors duration-300 group-hover:text-slate-600">
                Centralized database, segmentation, and interaction tracking.
              </p>
              
              <div className="flex flex-col gap-6">
                {customerFeatures.map((item, index) => (
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
                src="/images/cleandesk.jpg" 
                alt="CRM Dashboard" 
                className="max-w-full rounded-lg shadow-lg 
                  transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section: Testimonial */}
      <div className="py-20 bg-slate-50 transition-colors duration-500 hover:bg-slate-100">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl text-slate-900 mb-16 leading-tight 
              transition-colors duration-300 hover:text-blue-600">
              CRM has transformed the way we manage our customer relationships. It's intuitive & powerful.
            </h2>
            
            <div className="flex items-center justify-center gap-4 
              transition-transform duration-300 hover:scale-105">
              <img 
                src="/images/profile.png" 
                alt="Skyler Morgan" 
                className="w-14 h-14 rounded-full object-cover 
                  transition-transform duration-300 hover:rotate-6"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900 
                  transition-colors duration-300 hover:text-blue-600">
                  Skyler Morgan
                </h3>
                <p className="font-normal text-base text-slate-400 mt-1 
                  transition-colors duration-300 group-hover:text-slate-600">
                  CEO, CRM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;