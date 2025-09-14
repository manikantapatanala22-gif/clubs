import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Clubs", path: "/clubs" },
    { name: "Team", path: "/our-team" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="w-full bg-black px-6 py-4 relative">
      {/* Top row: Login */}
      <div className="flex justify-end">
        <Link
          to="/login"
          className="text-white hover:text-blue-400 transition font-medium text-lg"
        >
          Login
        </Link>
      </div>

      {/* Middle row: Logo */}
      <div className="flex justify-center py-2">
        <h1 className="text-2xl font-bold text-blue-400">ClubConnect</h1>
      </div>

      {/* Bottom row: Nav Links */}
      <div className="flex justify-center flex-wrap gap-6 text-white text-lg font-medium py-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-blue-400 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
