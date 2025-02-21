import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Take a look at our numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="stat-card text-center">
            <h3 className="stat-number text-5xl md:text-6xl font-bold text-[#2563EB] mb-4">
              99%
            </h3>
            <h4 className="stat-title text-xl font-medium text-gray-800 mb-3">
              Customer satisfaction
            </h4>
            <p className="text-gray-600 max-w-xs mx-auto">
              Our CRM enhances customer satisfaction with easy navigation and tailored support.
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="stat-card text-center">
            <h3 className="stat-number text-5xl md:text-6xl font-bold text-[#2563EB] mb-4">
              49K
            </h3>
            <h4 className="stat-title text-xl font-medium text-gray-800 mb-3">
              Successful Sales
            </h4>
            <p className="text-gray-600 max-w-xs mx-auto">
              The new CRM landing page has achieved record leads and conversions.
            </p>
          </div>
          
          {/* Stat 3 */}
          <div className="stat-card text-center">
            <h3 className="stat-number text-5xl md:text-6xl font-bold text-[#2563EB] mb-4">
              12M
            </h3>
            <h4 className="stat-title text-xl font-medium text-gray-800 mb-3">
              Sales Partners
            </h4>
            <p className="text-gray-600 max-w-xs mx-auto">
              The new CRM landing page has increased sales and attracted various clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
