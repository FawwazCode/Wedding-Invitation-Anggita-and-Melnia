"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.30)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:p-6"
  >
    <span className="text-2xl font-bold text-white font-mono drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:text-3xl md:text-4xl">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="mt-2 text-xs uppercase tracking-[0.15em] text-white/90 sm:text-sm">
      {label}
    </span>
  </motion.div>
);

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-06T07:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="event" className="relative overflow-hidden bg-[#070707] px-6 py-24 text-white sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/10 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-gradient-to-r from-white/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-80 w-80 rounded-full bg-gradient-to-l from-white/15 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/80 sm:text-sm">
          Wedding Event
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif uppercase tracking-[0.22em] text-white drop-shadow-[0_14px_50px_rgba(255,255,255,0.12)] sm:text-5xl"
        >
          Save The Date
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
          Hitung mundur menuju hari istimewa kami. Waktu berjalan cepat, tapi kenangan akan abadi.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto mt-14 max-w-4xl"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mx-auto mt-16 max-w-5xl"
      >
        <div className="grid gap-6 text-left md:grid-cols-3">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25 sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              <span className="text-lg leading-none">✦</span>
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Akad Nikah</h3>
            <p className="mt-2 text-sm text-white/80 sm:text-base">06 Juni 2026 · 07.00 WIB</p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <p className="mt-4 text-sm leading-7 text-white/75">
              Dengan memohon rahmat dan ridho Allah SWT, kami melangsungkan akad nikah.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25 sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              <span className="text-lg leading-none">✦</span>
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Resepsi</h3>
            <p className="mt-2 text-sm text-white/80 sm:text-base">06 Juni 2026 · 10.00 – 12.00 WIB</p>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <p className="mt-4 text-sm leading-7 text-white/75">
              Merupakan kebahagiaan bagi kami apabila Anda berkenan hadir untuk memberikan doa restu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/25 sm:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
              <span className="text-lg leading-none">⌁</span>
            </div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Lokasi</h3>
            <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
              Gedung Daarul Aitam <br />
              Jl. K.H. Mas Mansyur, Kb. Melati,<br />
              Kec. Tanah Abang, Kota Jakarta Pusat, <br />
              DKI Jakarta 10230
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                  Scan untuk lokasi
                </p>
              </div>
              <div className="mt-3 flex justify-center">
                <Image
                  src="/images/qr_lokasi.jpeg"
                  alt="QR Code Lokasi"
                  width={140}
                  height={140}
                  sizes="140px"
                  className="rounded-xl border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
