import Image from "next/image";
import Link from "next/link";

const PhotoList = async () => {
  const res = await fetch(`${process.env.BASE_API_URL}/photos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const photos = await res.json();

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photos/${photo.id}`}
            className="block break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
          >
            <Image
              src={photo.url}
              alt={photo.title || "photo"}
              width={700}
              height={700}
              className="w-full object-cover"
            />

            {photo.title && (
              <div className="p-3 text-sm text-gray-700">
                {photo.title}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;