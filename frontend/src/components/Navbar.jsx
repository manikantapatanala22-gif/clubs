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
    <nav className="fixed w-full bg-brand-nav px-6 py-4 relative">
      {/* Top row: Login */}
      <div className="flex justify-end">
        <Link
          to="/login"
          className="text-brand-primary font-bold hover:text-brand-secondary transition text-lg"
        >
          Login
        </Link>
      </div>

      {/* Middle row: Logo */}
      <div className="flex justify-center py-2">
        <h1 className="text-2xl font-bold text-brand-secondary">ClubConnect</h1>
      </div>

      {/* Bottom row: Nav Links */}
      <div className="flex justify-center flex-wrap gap-6 text-white text-lg font-medium py-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="font-bold hover:text-brand-secondary transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
