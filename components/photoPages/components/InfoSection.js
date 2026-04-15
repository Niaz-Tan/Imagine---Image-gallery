import { formate } from "@/lib/methods";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
const InfoSection = ({ photo }) => {
  return (
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
  );
};

export default InfoSection;
