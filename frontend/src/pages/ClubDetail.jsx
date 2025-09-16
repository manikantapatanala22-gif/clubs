import { useParams } from "react-router-dom";
import clubsData from "../data/clubsData";

const ClubDetail = () => {
  const { id } = useParams();
  // Find the club from local data instead of fetching from backend
  const club = clubsData.find(c => c.id === parseInt(id));

  if (!club) return <div className="text-center p-4">Club not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
      <p className="italic text-gray-600 mb-4">{club.tagline}</p>
      <img
        src={club.imageUrl}
        alt={`${club.name} logo`}
        className="w-full max-h-96 object-cover rounded mb-6"
      />
      <p className="text-gray-800 leading-relaxed">{club.description}</p>   {/*Change description to fullDescription for updated full club details*/}
    </div>
  );
};

export default ClubDetail;
