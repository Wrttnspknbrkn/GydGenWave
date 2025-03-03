import { CheckCircle } from 'lucide-react';

const LeadManagement = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-xl">
              <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight">
                Lead Management
              </h1>
              <p className="font-normal text-xl md:text-lg text-slate-400 mb-10 leading-relaxed">
                Capture and score leads, visualize the sales funnel.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Email:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Design professional emails with ease. Test and analyze performance to improve results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Forms:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Create custom forms to capture leads or feedback with simple drag-and-drop tools.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">CTAs:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Use dynamic buttons that adapt to user behavior for better engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">SMS:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Automate text messaging campaigns for timely updates and reminders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Buyer Intent:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Identify high-potential leads based on their online activities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Lead Scoring :</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Automatically score leads based on their engagement levels and readiness to buy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
              <img 
                src="/images/leads.jpg" 
                alt="Lead Management Dashboard" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works Section */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <img 
                src="/images/videotutorial.jpg" 
                alt="Video Tutorial" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-10 leading-tight">
                How Lead Management works?
              </h2>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Campaigns:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Plan and run marketing campaigns across channels with detailed tracking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Social:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Schedule and monitor posts on multiple social media platforms in one place.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Ads:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Track ad performance and get suggestions to optimize your ad budget.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Events:</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Organize virtual and physical events, and analyze attendee engagement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 inline mr-1">Lead Scoring :</h3>
                    <p className="font-normal text-base text-slate-400 inline leading-relaxed">
                      Automatically score leads based on their engagement levels and readiness to buy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadManagement;