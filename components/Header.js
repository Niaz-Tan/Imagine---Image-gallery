"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-6 md:px-20 py-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/60 backdrop-blur-md sticky top-0 z-50"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-3xl md:text-4xl font-extrabold italic tracking-widest select-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
      >
        IIG
      </motion.div>

      {/* Status */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block text-red-500 text-lg md:text-2xl font-semibold tracking-wide animate-pulse"
      >
        Under Construction 🚧
      </motion.p>

      {/* Button */}
      <motion.a
        href="https://github.com/Niaz-Tan/Imagine---Image-gallery"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2 bg-white text-black px-4 md:px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-white/20 transition-all duration-300"
      >
        <FaCode className="text-lg group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline">Source Code</span>
      </motion.a>
    </motion.header>
  );
};

export default Header;
