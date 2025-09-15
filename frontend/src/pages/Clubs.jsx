import ClubCard from "../components/ClubCard";
import Xpress from '../assets/clubs/exp.jpeg';

const Clubs = () => {
  const clubsData = [
    {
      name: 'Xpressionz Club',
      tagline: '“Where imagination meets the creativity on the stage”',
      description: 'Xpressionz Club, the largest in our college, is a vibrant platform for creativity and talent. More than a club, it builds confidence, teamwork, and lasting memories.',
      imageUrl: Xpress,
    },
    {
      name: 'Code-X',
      tagline: '“Innovate, create, code.”',
      description: 'Code-X is the hub for all things tech. We host hackathons, workshops, and coding challenges to help members grow their skills and build cool projects.',
      imageUrl: '/images/club2.png',
    },
    {
      name: 'Artistry Alliance',
      tagline: '“Unleash your inner artist.”',
      description: 'From painting to pottery, Artistry Alliance provides a space for students to explore their creative side. Join us to showcase your work and learn new techniques.',
      imageUrl: '/images/club3.png',
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      {clubsData.map((club, index) => (
        <ClubCard key={index} club={club} />
      ))}
    </div>
  );
};

export default Clubs;