import { CheckCircle } from 'lucide-react';

const SalesPipeline = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - With hover effects matching CustomerManagement */}
      <div className="py-20 bg-white transition-colors duration-500 hover:bg-slate-50 group">
        <div className="max-w-7xl mx-auto px-5 transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 max-w-xl">
              <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight 
                transition-colors duration-300 group-hover:text-blue-600">
                Sales Pipeline Management
              </h1>
              <p className="font-normal text-xl md:text-lg text-slate-400 mb-10 leading-relaxed 
                transition-colors duration-300 group-hover:text-slate-600">
                Track deals, monitor stages, and predict revenue.
              </p>
              
              <div className="flex flex-col gap-6">
                {[
                  { title: 'Overview:', description: 'Get a clear snapshot of revenue and transactions in one place.' },
                  { title: 'Payments:', description: 'Securely process payments with fraud protection and multiple currency options.' },
                  { title: 'Invoices:', description: 'Generate and send professional invoices. Set reminders for unpaid invoices.' },
                  { title: 'Payment Links:', description: 'Create easy-to-share links for quick transactions.' },
                  { title: 'Quotes:', description: 'Send interactive quotes with real-time updates and get approvals faster.' },
                  { title: 'Products:', description: 'Manage product catalogs, including descriptions, prices, and inventory levels.' },
                  { title: 'Subscriptions:', description: 'Handle recurring billing seamlessly and reduce churn with automated alerts.' }
                ].map((feature, index) => (
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
                        {feature.title}
                      </h3>
                      <p className="font-normal text-base text-slate-400 inline leading-relaxed 
                        transition-colors duration-300 group-hover/item:text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
              <img 
                src="/images/sales-pipeline.jpg" 
                alt="Sales Pipeline Dashboard" 
                className="max-w-full rounded-lg shadow-lg 
                  transition-all duration-500 hover:shadow-xl hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved Call to Action Section */}
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
                Automate alerts to simplify billing and cut churn!
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-80 
                transition-opacity duration-300 hover:opacity-100">
                Easily manage your recurring billing and keep customers happy with automated reminders!
              </p>
              
              <button 
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full 
                           text-base md:text-lg
                           transition-all duration-300 
                           hover:bg-blue-50 hover:shadow-lg 
                           active:scale-95 
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPipeline;