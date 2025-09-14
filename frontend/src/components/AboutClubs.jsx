import React from 'react';

// 📦 Club Data (Add more clubs here)
const clubs = [
  {
    name: 'Xpressionz Club',
    tagline: '“Where imagination meets the creativity on the stage”',
    description: `Xpressionz Club, the largest in our college, is a vibrant platform for creativity and talent. More than a club, it builds confidence, teamwork, and lasting memories.`,
    imageUrl: '/images/club1.png', // Place image in public/images
  },
  {
    name: 'VOICE',
    tagline: 'Inspiration to transformation– Lets continue the passion of making the difference',
    description: `VOICE, founded in 2001-02, nurtures student talent and entrepreneurial spirit. It hosts events like debates, case studies, JAM, and mock stock exchange.`,
    imageUrl: '/images/club2.png',
    isHighlighted: true, // Special styling for this one
  },
  {
    name: 'Abhyas Club',
    tagline: '“A great platform to learn, lead and create innovative ideas.”',
    description: `The Abhyas Club, launched in November 2011, is a student-driven platform for showcasing talent and growth. True to its name, it helps students overcome inhibitions and learn through practice.`,
    imageUrl: '/images/club3.png',
  },
];

// 📘 ClubCard Component
const ClubCard = ({ name, tagline, description, imageUrl, isHighlighted }) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg border ${
      isHighlighted ? 'border-blue-500' : 'border-gray-200'
    } hover:scale-105 transition-transform duration-300 bg-white shadow-md`}
  >
    <div className="flex-1">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 italic mb-2">{tagline}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Club Page
      </button>
    </div>
    <img
      src={imageUrl}
      alt={name}
      className="w-40 h-40 rounded-lg object-cover shadow-md"
    />
  </div>
);

// 📄 Main AboutClubs Component
const AboutClubs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {clubs.map((club, index) => (
        <ClubCard key={index} {...club} />
      ))}
    </div>
  );
};

export default AboutClubs;
