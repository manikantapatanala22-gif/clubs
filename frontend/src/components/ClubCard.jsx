

const ClubCard = ({ club }) => {
  return (
    <div 
      className="
        w-full max-w-[600px] h-auto 
        bg-white rounded-lg shadow-xl overflow-hidden 
        flex flex-col md:flex-row my-6
      "
    >
      {/* --- Image Section --- */}
      <div className="flex-none w-[250px] h-[250px]">
        <img 
          className="w-full h-full object-cover" 
          src={club.imageUrl} 
          alt={`${club.name} logo`} 
        />
      </div>

      {/* --- Content Section --- */}
      <div className="p-6 flex-1 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {club.name}
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-semibold italic mb-4">
          {club.tagline}
        </p>
        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
          {club.description}
        </p>
      </div>
    </div>
  );
};

export default ClubCard;