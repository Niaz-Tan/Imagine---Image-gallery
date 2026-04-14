import { formate } from "@/lib/methods";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoArrowBack, IoEyeOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";

const PhotoPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/photos/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch photo");
  }

  const photo = await res.json();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-10 transition"
        >
          <IoArrowBack />
          <span>Back</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT IMAGE */}
          <div>
            <div className="relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={photo.url}
                alt={photo.title}
                width={800}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/20 flex items-end justify-end p-4">
                <button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur">
                  <MdOutlineFileDownload className="text-white text-xl" />
                </button>
              </div>
            </div>

            {/* SMALL STATS */}
            <div className="flex gap-3 mt-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1">
                <IoEyeOutline />
                {formate(photo.id, "views")}
              </div>

              <div className="flex items-center gap-1">
                <IoTimeOutline />
                {photo.uploaded || "Recently"}
              </div>
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              {/* TITLE */}
              <h1 className="text-3xl font-semibold">{photo.title}</h1>

              <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                {photo.description || "No description available."}
              </p>

              {/* TAGS */}
              {photo.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {photo.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* STATS */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500">Views</p>
                  <p className="text-xl font-semibold">
                    {formate(photo.id, "views")}
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500">Shares</p>
                  <p className="text-xl font-semibold">
                    {formate(photo.id, "share")}
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500">Likes</p>
                  <p className="text-xl font-semibold">
                    {formate(photo.id, "likes")}
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <p className="text-xs text-zinc-500">Downloads</p>
                  <p className="text-xl font-semibold">1.2k</p>
                </div>
              </div>

              {/* AUTHOR */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-4">
                  <Image
                    src={photo.author?.avatar || "/default-avatar.png"}
                    alt="author"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />

                  <div>
                    <p className="font-medium">
                      {photo.author?.name || "Unknown"}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {formate(photo.id, "followers")} followers
                    </p>
                  </div>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition">
                  <SlUserFollow />
                  Follow
                </button>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-zinc-100 text-black py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition">
                  <CiHeart />
                  Like
                </button>

                <button className="flex-1 border border-zinc-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-800 transition">
                  <CiShare2 />
                  Share
                </button>
              </div>

              <p className="text-center text-xs text-zinc-600 mt-6">
                Photo ID: {photo.id} • Free to use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoPage;
