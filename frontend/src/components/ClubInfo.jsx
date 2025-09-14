import React, { useEffect, useState } from 'react';

const ClubInfo = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('/api/clubs');
        if (!response.ok) {
          throw new Error('Failed to fetch club details');
        }
        const data = await response.json();
        setClubs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) return <div>Loading club details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {clubs.map((club) => (
        <div key={club._id} className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg border border-gray-200 bg-white shadow-md">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{club.name}</h2>
            <p className="text-gray-500 italic mb-2">{club.tagline}</p>
            <p className="text-gray-700">{club.description}</p>
          </div>
          <img
            src={club.imageUrl}
            alt={club.name}
            className="w-40 h-40 rounded-lg object-cover shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ClubInfo;
