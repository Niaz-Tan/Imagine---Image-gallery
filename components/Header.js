const Header = () => {
  return (
    <div className="px-20 py-2 border-b border-zinc-800 flex justify-between items-center">
      <div className="text-4xl font-bold italic select-none">IIG</div>
      <p className="bg-yellow-200 px-5 py-2 text-red-500 text-lg font-semibold">
        Under Construction
      </p>
      <a
        href="https://github.com/Niaz-Tan/Imagine---Image-gallery"
        className="bg-zinc-50 text-zinc-950 px-5 py-1 rounded font-semibold select-none cursor-pointer hover:bg-zinc-400 active:scale-95"
        target="_blank"
      >
        Source code
      </a>
    </div>
  );
};

export default Header;
