import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Clubs", path: "/clubs" },
    { name: "Team", path: "/our-team" },
    { name: "Support", path: "/support" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-brand-nav p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo and Home Link */}
        <Link to="/" className="text-2xl font-bold text-brand-secondary">
          ClubConnect
        </Link>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-brand-primary hover:border-brand-primary">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
            </svg>
          </button>
        </div>

        {/* Nav Links and Login - Hidden on mobile by default */}
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="text-lg lg:flex-grow font-medium text-white lg:flex lg:justify-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block mt-4 lg:inline-block lg:mt-0 lg:mx-4 hover:text-brand-primary transition font-bold"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Link */}
          <div>
            <Link
              to="/login"
              className="block mt-4 text-xl lg:inline-block lg:mt-0 text-brand-primary hover:text-brand-secondary font-bold transition lg:ml-4"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;