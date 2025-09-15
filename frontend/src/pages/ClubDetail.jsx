import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ClubDetail = () => {
  const { id } = useParams();
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/clubs/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch club details');
        }
        return res.json();
      })
      .then(data => {
        setClub(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center p-4">Loading club details...</div>;
  if (error) return <div className="text-center p-4">Error: {error}</div>;
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
