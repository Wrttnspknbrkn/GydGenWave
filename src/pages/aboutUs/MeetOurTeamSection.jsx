import React from 'react';

const TeamMember = ({ name, role, description, imageSrc }) => {
  return (
    <div className="team-member-card bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="team-image-container">
        <img 
          src={imageSrc} 
          alt={`${name} - ${role}`} 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 text-sm font-medium rounded-md">
          {role}
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold">{name}</h3>
          <a href="#" className="linkedin-icon" aria-label={`LinkedIn profile for ${name}`}>
            <img src="/images/linkedin.svg" alt="LinkedIn" width={36} height={36} className="linkedin-svg" />
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
      imageSrc: '/images/person1.png'
    },
    {
      name: 'Scarlett Johansson',
      role: 'Financial Advisor',
      description: 'A financial advisor can enhance your investments with our CRM.',
      imageSrc: '/images/person2.png'
    },
    {
      name: 'Steve Rogers',
      role: 'Tech Lead',
      description: 'The Tech Lead enhances the CRM page\'s user experience.',
      imageSrc: '/images/person3.png'
    },
    {
      name: 'Chris Evans',
      role: 'Manager',
      description: 'The CRM landing page is easy to use and has a cool design.',
      imageSrc: '/images/person4.png'
    },
    {
      name: 'Sam Wilson',
      role: 'Financial Advisor',
      description: 'A financial advisor helps manage your investments.',
      imageSrc: '/images/person5.png'
    },
    {
      name: 'Tony Stark',
      role: 'Tech Lead',
      description: 'The Tech Lead manages the team\'s quality and deadlines.',
      imageSrc: '/images/person6.png'
    }
  ];

  return (
    <section className="team-section py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
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
