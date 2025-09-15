// src/pages/Team.jsx
import TeamCard from "../components/TeamCard";
import Richie from "../assets/team/richie.png";
import Deva from "../assets/team/deva.png"
import Vishnu from "../assets/team/vishnu.png"
import Manikanta from "../assets/team/manikanta.png"
import Rishi from "../assets/team/rishi.png"
import Sahithi from "../assets/team/sahithi.png"


const members = [
  {
    name: "Richard Gomes",
    title: "Fake CEO 🥵",
    tagline: "Surinder The Bottle",
    image: Richie,
    instagram: "https://www.instagram.com/drivin.exe/",
  },
  {
    name: "Deva Vrata",
    title: "Fake CTO 😎",
    tagline: "Surinder Evaru?",
    image: Deva,
    instagram: "https://www.instagram.com/redcreeper19/",
  },
  {
    name: "Vishnu",
    title: "Java System Designer🤫",
    tagline: "Tagline cannot contain his genius",
    image: Vishnu,
    instagram: "https://www.instagram.com/spidermiles120/",
  },
  {
    name: "Manikanta",
    title: "Kamal Hassan😛",
    tagline: "Chick Magnet",
    image: Manikanta,
    instagram: "https://www.instagram.com/maniii_ii2/",
  },
  {
    name: "Rishi Shankar",
    title: "Canva Developer",
    tagline: "Chick Magnet + Pullihora",
    image: Rishi,
    instagram: "https://www.instagram.com/rishi.____.05/",
  },
  {
    name: "Sahithi Manda",
    title: "Morale Support",
    tagline: "Rich people",
    image: Sahithi,
    instagram: "https://www.instagram.com/_.sahithigoud._/",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen w-full p-8 text-white">
      <h1 className="text-brand-primary text-4xl font-bold text-center mb-12">
        Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <TeamCard
            key={member.name}
            image={member.image}
            name={member.name}
            title={member.title}
            tagline={member.tagline}
            instagram={member.instagram}
          />
        ))}
      </div>
    </div>
  );
}