import { formate } from "@/lib/methods";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";

const PhotoList = async () => {
  const res = await fetch(`https://iig-one.vercel.app/api/photos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const photos = await res.json();

  // Handlers

  return (
    <div className="p-4">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className=" break-inside-avoid overflow-hidden rounded-2xl bg-zinc-900 transition duration-300 border border-zinc-800 p-3 flex flex-col gap-2"
          >
            <div className="relative group">
              <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer ">
                  Save
                </button>
              </div>
              <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100">
                <button className="text-zinc-950 bg-zinc-50 size-10 rounded-full flex justify-center items-center text-2xl font-semibold cursor-pointer ">
                  <IoShareSocial />
                </button>
              </div>
              <Link href={`/photos/${photo.id}`}>
                <Image
                  src={photo.url}
                  alt={photo.title || "photo"}
                  width={700}
                  height={700}
                  className="w-full object-cover rounded-lg z-0 bg-zinc-950 "
                />
              </Link>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold w-full">{photo.title}</h1>
                <button className="flex items-center justify-center gap-1 border border-zinc-800 px-2 py-1 rounded-xl cursor-pointer">
                  <div className="text-xl">
                    <CiHeart />
                  </div>
                  <div className="text-sm">{formate(photo.id, "likes")}</div>
                </button>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="">
                  <Image
                    src={photo.author.avatar}
                    alt={photo.title || "photo"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="">
                  <div className="text-sm text-zinc-200">{photo.title}</div>
                  <div className="text-xs text-zinc-400">
                    {getFollowers(photo.id)} followers
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
