import TeamCard from "../components/TeamCard";
import Richie from "../assets/team/richie.png"

const members = [ 
  {
    name: "Richard Gomes",
    title: "Fake CEO 🥵",
    tagline: "surinder the bottle",
    image: Richie,
    instagram:"https://www.instagram.com/drivin.exe/"
  },
  {
    name: "Deva Vrata",
    title: "Fake CTO 😎",
    tagline: "nene",
    image: "",
    instagram:""
  },
  {
    name: "Vishnu",
    title: "Java System Designer🤫",
    tagline: "c/o PP",
    image: "",
    instagram:""
  },
  {
    name: "Manikanta",
    title: "Kamal Hassan😛",
    tagline: "chick magnet",
    image: "",
    instagram:""

  },
  {
    name: "Rishi Shankar",
    title: "Canva Developer",
    tagline: "chick magnet + pullihora",
    image: "",
    instagram:""

  },
  {
    name: "Manda",
    title: "Morale Support",
    tagline: "10 wine shops",
    image: "",
    instagram:""
  },
  
];

export default function Team() {
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-brand-primary text-4xl font-bold text-center mb-12">
        Our Team
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
