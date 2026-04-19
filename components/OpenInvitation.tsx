"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface OpenInvitationProps {
  onOpen: () => void;
}

export default function OpenInvitation({ onOpen }: OpenInvitationProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden bg-[#070707] text-white flex flex-col items-center justify-center px-4 sm:px-10">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a1410]/70 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-white/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-l from-white/25 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full text-center py-8"
      >
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col h-full justify-between"
        >
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white">
              Undangan Pernikahan
            </p>
            <h1 className="mb-4 text-3xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl">
              Melnia <br />&<br /> Anggita
            </h1>
            <p className="mx-auto mb-6 max-w-xl text-xs leading-6 text-white sm:text-sm">
              Dengan senang hati kami mengundang Anda merayakan momen spesial kami. Hadir dan bersama-sama menciptakan kenangan indah dalam hari istimewa ini.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 space-y-2 rounded-xl border border-white/20 bg-white/10 p-2 sm:p-4"
          >
            <div className="text-base font-semibold text-white">06 Juni 2026</div>
            <div className="text-xs text-white/90">Gedung Daarul Aitam, Jakarta Pusat</div>
            <div className="flex justify-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Akad Nikah</p>
                <p className="mt-1 text-xs font-semibold text-white">07:00 WIB</p>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">Resepsi</p>
                <p className="mt-1 text-xs font-semibold text-white">10:00 - 12:00 WIB</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onOpen}
          type="button"
          className="group relative inline-flex"
        >
          <motion.div
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative px-8 py-4 rounded-full border-2 border-white/40 bg-white/10 transition duration-500 hover:border-white/60 hover:bg-white/15 sm:px-12 sm:py-5"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">
              Buka Undangan
            </span>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
