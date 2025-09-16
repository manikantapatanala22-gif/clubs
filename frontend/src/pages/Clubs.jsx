import ClubCard from "../components/ClubCard";
import clubsData from "../data/clubsData";

const Clubs = () => {
  // Use local frontend data instead of fetching from backend
  const clubs = clubsData;

  return (
    <div className="flex flex-col items-center p-4">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={{ ...club, link: `/clubs/${club.id}` }} />
      ))}
    </div>
  );
};

export default Clubs;
