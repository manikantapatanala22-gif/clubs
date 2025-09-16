import { useParams } from "react-router-dom";
import clubsData from "../data/clubsData";
function ClubDetail() {
  const { id } = useParams();
  const club = clubsData.find(c => c.id === parseInt(id));

  if (!club) return <div className="text-center p-4">Club not found</div>;

  return (
    <div className="w-11/12 lg:w-4/5 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/4">
          <img
            src={club.imageUrl}
            alt={`${club.name} logo`}
            className="w-full h-auto object-cover rounded"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-2 text-brand-primary">{club.name}</h1>
          <p className="italic text-brand-accent mb-4">{club.tagline}</p>
          <p className="text-brand-secondary leading-relaxed">{club.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;