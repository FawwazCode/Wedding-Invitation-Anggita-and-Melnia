"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  { id: 1, title: "First Moment", src: "/images/1.jpeg" },
  { id: 2, title: "Morning Glow", src: "/images/2.jpeg" },
  { id: 3, title: "Golden Together", src: "/images/3.jpeg" },
  { id: 4, title: "Forever Us", src: "/images/4.jpeg" },
];

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const overlayVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a1410]/70 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-gradient-to-r from-gold/25 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white">
          Romantic Moments
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl"
        >
          Gallery
        </motion.h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-white sm:text-base">
          Kenangan indah dari momen spesial kami. Nikmati suasana elegan dengan animasi halus dan tampilan grid modern.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/50 hover:bg-white/15"
          >
            <div className="relative h-[360px] w-full overflow-hidden bg-slate-900/10">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <motion.div
                initial="hidden"
                whileHover="visible"
                variants={overlayVariants}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              />
              <motion.div
                initial="hidden"
                whileHover="visible"
                variants={overlayVariants}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute inset-x-0 bottom-0 p-5 text-left text-white"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-white/90">
                  Gallery
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                  {item.title}
                </h3>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
