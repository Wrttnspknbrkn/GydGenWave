import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount();
          observer.current.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.current.observe(countRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(startValue + (end - startValue) * easedProgress));
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return <span ref={countRef}>{count}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      number: 99,
      suffix: '%',
      title: 'Customer satisfaction',
      description: 'Our CRM enhances customer satisfaction with easy navigation and tailored support.'
    },
    {
      number: 49,
      suffix: 'K',
      title: 'Successful Sales',
      description: 'The new CRM landing page has achieved record leads and conversions.'
    },
    {
      number: 12,
      suffix: 'M',
      title: 'Sales Partners',
      description: 'The new CRM landing page has increased sales and attracted various clients.'
    }
  ];

  return (
    <section className="stats-section py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
          Take a look at our numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card text-center px-4">
              <h3 className="stat-number text-5xl md:text-6xl font-bold text-[#2563EB] mb-6">
                <CountUp end={stat.number} duration={2500} />{stat.suffix}
              </h3>
              <h4 className="stat-title text-xl font-medium text-gray-800 mb-4">
                {stat.title}
              </h4>
              <p className="text-gray-600 max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
