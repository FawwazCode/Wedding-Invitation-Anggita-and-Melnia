"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const smoothEase = [0.2, 0.9, 0.2, 1] as const;

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

export default function DoaPelamin() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Background */}
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
          priority
          className="object-cover object-center brightness-90"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"
        />
      </motion.div>

      {/* Floating Decorations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute left-10 top-20 h-24 w-24 rounded-full border border-white/10 blur-xl sm:h-32 sm:w-32 sm:blur-2xl"
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-20 right-10 h-24 w-24 rounded-full border border-white/10 blur-xl sm:h-40 sm:w-40 sm:blur-2xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16 text-center"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col items-center"
          >
            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 0.4, rotate: 360 }}
              transition={{
                duration: 2,
                delay: 2,
                ease: smoothEase,
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="absolute -top-8 left-2 sm:-top-10 sm:left-10 md:-top-12 md:left-16"
            >
              <div className="relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 2,
                    delay: 2.2,
                    ease: smoothEase,
                  }}
                  className="h-[1px] w-16 origin-left bg-gradient-to-r from-transparent via-white/30 to-transparent sm:w-20 md:w-24"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 2.5,
                    ease: smoothEase,
                  }}
                  className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/40"
                />
              </div>
            </motion.div>

            {/* Title */}
            <div className="relative inline-block">
              <h1
                className={`${greatVibes.className} text-5xl tracking-wide text-white/95 md:text-6xl lg:text-7xl`}
              >
                Doa Untuk Pengantin
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                  ease: smoothEase,
                }}
                className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 1.2,
                ease: smoothEase,
              }}
              className="mt-4 h-px origin-center bg-white/30"
              style={{ width: "5rem" }}
            />
          </motion.div>

          {/* Prayer Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: smoothEase,
            }}
            className="relative mx-auto max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.5,
                ease: smoothEase,
              }}
              className="absolute inset-0 rounded-2xl bg-white/5 blur-lg sm:rounded-3xl sm:blur-xl"
            />

            <blockquote className="relative text-lg font-light leading-relaxed text-white/90 sm:text-xl md:text-2xl">
              “Semoga Allah memberkahimu di waktu bahagia dan
              memberkahimu di waktu susah dan mengumpulkan kalian
              berdua dalam kebaikan.”
            </blockquote>
          </motion.div>

          {/* Source */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: smoothEase,
            }}
            className="relative text-sm uppercase tracking-wide text-white/60 md:text-base"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                delay: 1.8,
                ease: smoothEase,
              }}
              className="absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-white/20"
            />

            — HR. Abu Daud —
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}