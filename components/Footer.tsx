"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-400">
      <p>Terima kasih atas doa dan restu Anda</p>
      <p className="mt-2 text-gold">Imel & Anggit</p>
      
      {/* Watermark */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="mt-11 text-xs text-white/30"
      >
        © 2026 Crafted by Fawwaz Hirogest | 0859 3985 9097
      </motion.div>
    </footer>
  );
}