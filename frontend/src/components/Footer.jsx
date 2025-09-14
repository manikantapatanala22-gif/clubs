// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand + Socials */}
        <div>
          <div className="text-white font-bold text-xl">ClubConnect</div>
          <div className="flex space-x-4 mt-4 text-white text-lg">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="grid grid-cols-2 text-white gap-2 text-sm md:text-base">
          <a href="/clubs" className="hover:text-blue-400 transition">All the Clubs</a>
          <a href="#" className="hover:text-blue-400 transition">Know the College</a>
          <a href="#" className="hover:text-blue-400 transition">Know the Team</a>
          <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ClubConnect Org. <span className="text-sm text-white"> Meow;)</span>
      </div>
    </footer>
  );
}
