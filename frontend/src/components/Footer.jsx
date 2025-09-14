// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 border-t mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-white font-bold text-lg">ClubConnect</div>
          <div className="flex space-x-3 mt-4 text-gray-600 text-sm">
            <a href="#"> <i className="fab fa-facebook"></i> </a>
            <a href="#"> <i className="fab fa-twitter"></i> </a>
            <a href="#"> <i className="fab fa-instagram"></i> </a>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-2 text-gray-700">
          <a href="#" className="hover:underline">Know your Clubs</a>
          <a href="#" className="hover:underline">Know your College</a>
          <a href="#" className="hover:underline">Know our Team</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}