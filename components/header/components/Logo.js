"use client"
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-3xl md:text-4xl font-extrabold italic tracking-widest select-none bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
    >
      IIG
    </motion.div>
  );
};

export default Logo;
