import React from 'react';
import { CheckCircle } from 'lucide-react';

const CustomerManagement = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-lg lg:max-w-xl">
              <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight">
                Customer Management
              </h1>
              <p className="font-normal text-xl md:text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed">
                Centralized database, segmentation, and interaction tracking.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Contacts:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Store and organize all customer information in one place. View interaction history for better follow-ups.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Companies:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Group contacts under their respective organizations and access relevant data effortlessly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Deals:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Track ongoing sales opportunities with an easy-to-use visual pipeline.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Tickets:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Manage customer issues using a simple ticketing system. Prioritize and resolve tickets efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Lists:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Create and manage groups of contacts for targeted actions, such as email campaigns or follow-ups.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Inbox:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      A single place for emails, chats, and social media messages to ensure no communication is missed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Calls:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Make and track calls directly in the CRM. Record and review conversations for better customer insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Tasks:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Organize daily to-dos and set reminders to stay on top of priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <img 
                src="/images/cleandesk.jpg" 
                alt="CRM Dashboard" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-16 leading-tight">
              CRM has transformed the way we manage our customer relationships. It's intuitive & powerful.
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <img 
                src="/images/profile.png" 
                alt="Skyler Morgan" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg text-slate-900 m-0">Skyler Morgan</h3>
                <p className="font-normal text-base text-slate-400 mt-1 mb-0">CEO, CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;