// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16 min-w-screen">
        <div className="text-xl font-bold">ClubConnect</div>
        <nav className="hidden md:flex space-x-6 text-sm text-white font-medium">
          <Link to="/EventCard" className="transform hover:scale-125 transition-transform duration-300 ">Events</Link>
          <Link to="/AboutClubs" className="transform hover:scale-125 transition-transform duration-300">About Clubs</Link>
          <Link to="/our-team" className="transform hover:scale-125 transition-transform duration-300">Our Team</Link>
          <Link to="/support" className="transform hover:scale-125 transition-transform duration-300">Support</Link>
        </nav>
        <button className="ml-4 bg-white text-black-900 px-4 py-1 rounded-md text-sm font-medium shadow transform hover:scale-90 transition-transform duration-300 hover:bg-gray-100">Log In</button>
      </div>
    </header>
  );
}
