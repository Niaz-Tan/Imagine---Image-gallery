import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <div className="px-20 py-2 border-b border-zinc-800 flex justify-between items-center">
      <div className="text-4xl font-bold italic select-none">IIG</div>
      <p className="text-red-500 text-3xl font-semibold">Under Construction</p>
      <a
        href="https://github.com/Niaz-Tan/Imagine---Image-gallery"
        className="bg-zinc-50 text-zinc-950 px-5 py-2 rounded font-semibold select-none cursor-pointer hover:bg-zinc-400 active:scale-95 flex justify-center items-center gap-2"
        target="_blank"
      >
        <div className="text-xl">
          <FaCode />
        </div>
        Source code
      </a>
    </div>
  );
};

export default Header;
