import { formate } from "@/lib/methods";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";

const PhotoList = async () => {
  const res = await fetch(`https://iig-one.vercel.app/api/photos`, {
    cache: "no-store",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const photos = await res.json();

  return (
    <div className="p-6 md:p-8 bg-black min-h-screen">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6 space-y-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group break-inside-avoid bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-zinc-700 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
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

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <form action="/api/save" method="POST">
                  <input type="hidden" name="photoId" value={photo.id} />
                  <button
                    type="submit"
                    className="bg-white/95 hover:bg-white text-zinc-900 px-5 py-2.5 rounded-2xl font-medium text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <CiHeart className="text-lg" />
                    Save
                  </button>
                </form>

                <form action="/api/share" method="POST">
                  <input type="hidden" name="photoId" value={photo.id} />
                  <button
                    type="submit"
                    className="bg-white/95 hover:bg-white text-zinc-900 size-11 rounded-2xl flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <IoShareSocial className="text-xl" />
                  </button>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-5 flex items-start justify-between gap-4">
              <Link href={`/photos/${photo.id}`} className="flex-1 min-w-0">
                <h3 className="font-semibold text-zinc-100 line-clamp-2 leading-tight hover:text-purple-400 transition-colors">
                  {photo.title}
                </h3>
              </Link>

              <form action="/api/like" method="POST">
                <input type="hidden" name="photoId" value={photo.id} />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-red-500 transition-colors pt-0.5 cursor-pointer"
                >
                  <CiHeart className="text-2xl" />
                  <span className="text-sm font-medium tabular-nums">
                    {formate(photo.id, "likes")}
                  </span>
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
