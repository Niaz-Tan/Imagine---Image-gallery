import Image from "next/image";
import Link from "next/link";
const ImageContainer = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`}>
      <Image
        src={photo.url}
        alt={photo.title || "Photo"}
        width={800}
        height={800}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </Link>
  );
};

export default ImageContainer;
