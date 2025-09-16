import { useState } from "react";
import { Link } from "react-router-dom";
import ClubCard from "../components/ClubCard";

const clubsData = [
  {
    _id: "1",
    name: 'Xpressionz Club',
    tagline: '“Where imagination meets the creativity on the stage”',
    description: `Xpressionz Club, the largest in our college, is a vibrant platform for creativity and talent. More than a club, it builds confidence, teamwork, and lasting memories.`,
    fullDescription: `Xpressionz Club is the largest club in our college, serving as a vibrant hub for all things creative and performative. We believe that imagination is the key to unlocking true potential, and we provide a stage where creativity and talent can flourish. Our activities range from theatrical productions to dance workshops, spoken word events, and musical showcases.`,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/07/28/22/01/stage-865243_1280.jpg',
  },
  {
    _id: "2",
    name: 'VOICE',
    tagline: 'Inspiration to transformation– Lets continue the passion of making the difference',
    description: `VOICE, founded in 2001-02, nurtures student talent and entrepreneurial spirit. It hosts events like debates, case studies, JAM, and mock stock exchange.`,
    fullDescription: `VOICE, or "Visions of Innovative and Creative Entrepreneurs," was founded in 2001-02 with the mission of nurturing student talent and entrepreneurial spirit. The club offers a dynamic platform for intellectual growth through a wide array of events. We host high-stakes debates, practical case studies, and engaging public speaking sessions.`,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/06/07/16/49/microphone-3460290_1280.jpg',
  },
  {
    _id: "3",
    name: 'Abhyas Club',
    tagline: '“A great platform to learn, lead and create innovative ideas.”',
    description: `The Abhyas Club, launched in November 2011, is a student-driven platform for showcasing talent and growth. True to its name, it helps students overcome inhibitions and learn through practice.`,
    fullDescription: `The Abhyas Club, which launched in November 2011, is a student-driven platform dedicated to showcasing talent and fostering personal and professional growth. True to its name, meaning 'practice' in Hindi, the club helps students overcome inhibitions and build confidence through hands-on learning and practical application.`,
    imageUrl: 'https://cdn.pixabay.com/photo/2016/06/09/06/31/university-1445946_1280.jpg',
  },
];

const Clubs = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-[#292929]">
      <h1 className="text-3xl font-bold mb-8 text-white">All Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {clubsData.map((club) => (
          <Link to={`/clubs/${club._id}`} key={club._id} className="no-underline text-inherit">
            <ClubCard club={club} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clubs;