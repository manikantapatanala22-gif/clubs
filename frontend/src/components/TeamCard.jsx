

const TeamCard = ({ name, title, tagline, image, instagram }) => {
  return (
    <div className="bg-brand-nav rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-brand-primary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-brand-secondary">{name}</h3>
      <p className="text-sm font-semibold text-brand-primary mb-1">{title}</p>
      <p className="text-sm italic text-brand-primary mb-4">{tagline}</p>

      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-primary mb-1">
          View Instagram
        </a>
      )}
    </div>
  );
};

export default TeamCard;