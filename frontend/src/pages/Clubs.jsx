import { useState, useEffect } from "react";
import ClubCard from "../components/ClubCard";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then(res => res.json())
      .then(data => {
        setClubs(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading clubs...</div>;
  if (error) return <div className="text-center p-4">Error: {error}</div>;

  return (
    <div className="flex flex-col items-center p-4">
      {clubs.map((club) => (
        <ClubCard key={club._id} club={{ ...club, link: `/clubs/${club._id}` }} />
      ))}
    </div>
  );
};

export default Clubs;
