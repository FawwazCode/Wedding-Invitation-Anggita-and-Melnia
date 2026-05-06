"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.2, 0.9, 0.2, 1],
    },
  },
};

export default function DoaPelamin() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Animated background with parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/1.jpeg"
          alt="Wedding background"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" 
        />
      </motion.div>

      {/* Floating decorative elements - optimized for mobile */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 border border-white/10 rounded-full blur-xl sm:blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-20 right-10 w-24 h-24 sm:w-40 sm:h-40 border border-white/10 rounded-full blur-xl sm:blur-2xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-16"
        >
          {/* Premium header with animated underline */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }}
            className="relative"
          >
            <h1 className={`${greatVibes.className} text-5xl md:text-6xl lg:text-7xl text-white/95 tracking-wide`}>
              Doa Untuk Pengantin
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
              className="mt-4 h-px bg-white/30 mx-auto origin-center"
              style={{ width: "5rem" }}
            />
          </motion.div>

          {/* Main prayer content with optimized glow effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
            className="max-w-3xl mx-auto relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="absolute inset-0 bg-white/5 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl"
            />
            <blockquote className="relative text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90 font-light">
              "Semoga Allah memberkahimu di waktu bahagia dan memberkahi di waktu susah dan mengumpulkan kalian berdua dalam kebaikan"
            </blockquote>
          </motion.div>

          {/* Source attribution with fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
            className="text-white/60 text-sm md:text-base tracking-wide uppercase relative"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.8, ease: [0.2, 0.9, 0.2, 1] }}
              className="absolute -bottom-1 left-0 h-px bg-white/20"
            />
            — HR. Abu Daud —
          </motion.div>

          {/* Premium decorative element with rotation */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.4, rotate: 360 }}
            transition={{ 
              duration: 2, 
              delay: 2, 
              ease: [0.2, 0.9, 0.2, 1],
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="flex justify-center pt-8"
          >
            <div className="relative">
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2.2 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
