"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brideGroomData = [
  {
    name: "Melnia Riska Ramadhani",
    title: "Putri dari Bpk. Suhadi & Ibu Dwi Lestari",
    image: "/images/1.jpeg",
  },
  {
    name: "Anggita Kurniawan",
    title: "Putra dari Bpk. Aris Karyono & Ibu Murni",
    image: "/images/2.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } },
};

export default function BrideGroom() {
  return (
    <section className="relative py-24 px-6 sm:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0f0f0f]/70 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-16 h-72 w-72 rounded-full bg-gradient-to-r from-white/25 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white">
          The Couple
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl"
        >
          Mempelai
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white sm:text-base">
          Kenali lebih dekat pasangan yang akan merayakan cinta mereka dalam hari yang penuh kebahagiaan.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12"
      >
        {brideGroomData.map((person, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/50 hover:bg-white/15"
          >
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-900/10">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/90">
                  {index === 0 ? "The Bride" : "The Groom"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white">
                  {person.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
