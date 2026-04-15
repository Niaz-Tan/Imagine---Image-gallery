import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
const Hover = ({ photo }) => {
  return (
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
  );
};

export default Hover;
