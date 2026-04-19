"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollToEvent = () => {
    const eventSection = document.getElementById("event");
    eventSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070707] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/1.jpeg"
          alt="Imel and Anggit wedding background"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70 sm:text-base">
            Wedding Invitation
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
          <div className="text-center lg:text-left space-y-4">

  {/* Nama 1 */}
  <h1 className="text-3xl font-serif leading-tight text-white sm:text-4xl md:text-5xl">
    Melnia Riska Ramadhani
  </h1>

  {/* Orang tua 1 */}
  <p className="text-sm text-white/70 sm:text-base">
    Putri dari Bpk. Suhadi & Ibu Dwi Lestari
  </p>

  {/* AND */}
  <p className="italic text-white/80 text-lg tracking-widest">
    And
  </p>

  {/* Nama 2 */}
  <h1 className="text-3xl font-serif leading-tight text-white sm:text-4xl md:text-5xl">
    Anggita Kurniawan
  </h1>

  {/* Orang tua 2 */}
  <p className="text-sm text-white/70 sm:text-base">
    Putra dari Bpk. Aris Karyono & Ibu Murni
  </p>

</div>

          {/* <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#event"
              className="inline-flex rounded-full bg-gradient-to-r from-gold via-[#f7d087] to-[#f1c462] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_20px_45px_rgba(201,169,110,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              Save the Date
            </a>
            <span className="text-sm text-white/70 sm:text-base">
              06.06.2026 · Bali
            </span>
          </div> */}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToEvent}
        className="absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 px-4 py-3 text-white transition duration-300 hover:border-gold/40 hover:bg-black/30 hover:scale-[1.05]"
        aria-label="Scroll ke bagian event"
      >
        <span className="animate-bounce text-2xl leading-none">↓</span>
      </button>
    </section>
  );
}
