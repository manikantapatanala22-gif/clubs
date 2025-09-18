import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EventCard = ({ event, refresh, onEdit }) => {
  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await fetch(`/api/events/${event._id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        refresh();
      } catch (error) {
        alert("Failed to delete event");
      }
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 border-2 border-transparent hover:border-brand-primary cursor-pointer"
    >
      <Link
        to={`/events/${event._id}`}
        key={event._id}
        className="w-full flex flex-col items-center"
      >
        {event.eventImage && (
          <img
            src={event.eventImage}
            alt={event.eventName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <h3 className="text-2xl font-semibold text-brand-primary text-center">
          {event.eventName}
        </h3>
        <p className="text-gray-600 text-center mt-2">{event.eventDate}</p>
        <p className="text-gray-500 text-center text-sm">{event.eventVenue}</p>
      </Link>
      {refresh && (
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default EventCard;
