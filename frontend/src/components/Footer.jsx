// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-nav border-t border-gray-800 mt-12 py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div>
          <div className="text-brand-primary font-bold text-xl">ClubConnect</div>
  
      
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 text-brand-secondary font-bold gap-2 text-sm md:text-base absolute top-1 right-2">
          <a href="/clubs" className="">All the Clubs</a>
          <a href="https://bhavansvc.ac.in/" target="_blank" className="">Know the College</a>
          <a href="/our-team" className="">Know the Team</a>
          <a href="mailto:richardgomesxd@gmail.com" className="">Contact Us</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <h5>&copy; {new Date().getFullYear()} ClubConnect Org.</h5>
         <span className="text-sm text-white"> Meow;)</span>
      </div>
    </footer>
  );
}
