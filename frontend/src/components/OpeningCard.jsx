import React from 'react';
import { motion } from 'framer-motion';

const OpeningCard = ({ opening, refresh, onEdit }) => {
  const handleEdit = () => {
    if (onEdit) onEdit();
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this job opening?")) {
      try {
        await fetch(`/api/openings/${opening._id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
        });
        refresh();
      } catch (error) {
        alert("Failed to delete job opening");
      }
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 border-2 border-transparent hover:border-brand-primary"
    >
      {opening.image && (
        <img
          src={opening.image}
          alt={opening.role}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold text-brand-primary text-center">
        {opening.role}
      </h3>
      <p className="text-gray-600 text-center mt-2">
        For: {opening.openingFor}
      </p>
      <p className="text-gray-500 text-center text-sm">
        Deadline: {opening.deadline}
      </p>
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

export default OpeningCard;