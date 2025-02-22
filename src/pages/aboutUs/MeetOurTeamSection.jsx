import React from 'react';

const TeamMember = ({ name, role, description, imageSrc }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative w-full aspect-[4/5]">
        <img 
          src={imageSrc} 
          alt={`${name} - ${role}`} 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <span className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 text-sm font-medium rounded-md">
          {role}
        </span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <a href="#" className="flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-110" aria-label={`LinkedIn profile for ${name}`}>
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-8 h-8 filter drop-shadow" />
          </a>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const MeetOurTeamSection = () => {
  const teamMembers = [
    {
      name: 'Tom Holland',
      role: 'Manager',
      description: 'The CRM landing page is user-friendly.',
      imageSrc: '/images/person6.png'
    },
    {
      name: 'Scarlett Johansson',
      role: 'Financial Advisor',
      description: 'A financial advisor can enhance your investments with our CRM.',
      imageSrc: '/images/person4.png'
    },
    {
      name: 'Steve Rogers',
      role: 'Tech Lead',
      description: 'The Tech Lead enhances the CRM page\'s user experience.',
      imageSrc: '/images/person2.png'
    },
    {
      name: 'Chris Evans',
      role: 'Manager',
      description: 'The CRM landing page is easy to use and has a cool design.',
      imageSrc: '/images/person5.png'
    },
    {
      name: 'Sam Wilson',
      role: 'Financial Advisor',
      description: 'A financial advisor helps manage your investments.',
      imageSrc: '/images/person3.png'
    },
    {
      name: 'Tony Stark',
      role: 'Tech Lead',
      description: 'The Tech Lead manages the team\'s quality and deadlines.',
      imageSrc: '/images/person1.png'
    }
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Meet Our Team Members
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
