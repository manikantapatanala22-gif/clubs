// src/components/EventCard.jsx
import React from "react";

export default function EventCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden w-80 hover:w-96 transition-all duration-300 hover:shadow-lg cursor-pointer">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
