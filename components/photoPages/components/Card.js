import Hover from "./Hover";
import ImageContainer from "./ImageContainer";
import InfoSection from "./InfoSection";

const Card = ({ photo }) => {
  return (
    <div className="group break-inside-avoid bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-zinc-700 transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <ImageContainer photo={photo} />

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <Hover photo={photo} />
      </div>

      {/* Info Section */}
      <InfoSection photo={photo} />
    </div>
  );
};

export default Card;
