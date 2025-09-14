import { FaInstagram } from "react-icons/fa";



export default function TeamCard({ image, name, title, tagline, instagram }) {
  return (
    <div className="bg-brand-nav rounded-lg overflow-hidden shadow-lg flex flex-col items-center p-4 text-center relative">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h2 className="text-white font-bold text-xl">{name}</h2>
      <p className="text-gray-300 text-sm">{title}</p>
      <p className="text-gray-400 text-sm mt-2 italic">{tagline}</p>


      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-brand-primary hover:text-brand-primary transition-colors absolute top-3 right-5"
        >
          <FaInstagram size={30} />
        </a>
      )}
    </div>
  );
}
