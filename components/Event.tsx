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
    className="flex flex-col items-center justify-center rounded-[20px] border border-white/20 bg-white/10 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:border-white/50 hover:bg-white/15 sm:p-6"
  >
    <span className="text-2xl font-bold text-white font-mono sm:text-3xl md:text-4xl">
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
    <section id="event" className="relative py-24 px-6 sm:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0f0f0f]/70 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-gradient-to-r from-white/25 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white">
          Wedding Event
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl"
        >
          Save The Date
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white sm:text-base">
          Hitung mundur menuju hari istimewa kami. Waktu berjalan cepat, tapi kenangan akan abadi.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-16 max-w-4xl"
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
        className="mt-20 space-y-8 text-center"
      >
        <div className="rounded-[24px] border border-white/20 bg-white/10 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/50 hover:bg-white/15 sm:p-8">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Akad Nikah</h3>
          <p className="mt-2 text-sm text-white sm:text-base">07.00 WIB - Selesai</p>
        </div>

        <div className="rounded-[24px] border border-white/20 bg-white/10 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/50 hover:bg-white/15 sm:p-8">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Resepsi</h3>
          <p className="mt-2 text-sm text-white sm:text-base">10.00 - 12.00 WIB</p>
        </div>

        <div className="rounded-[24px] border border-white/20 bg-white/10 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition duration-500 hover:border-white/50 hover:bg-white/15 sm:p-8">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Lokasi</h3>
          <p className="mt-2 text-sm text-white sm:text-base">
            Gedung Daarul Aitam <br />
            Jl. K.H. Mas Mansyur, Kb. Melati,<br />
            Kec. Tanah Abang, Kota Jakarta Pusat, <br />
            Daerah Khusus Ibukota Jakarta 10230 <br />
            <br />
            Scan Lokasi disini
          </p>
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/qr_lokasi.jpeg"
              alt="QR Code Lokasi"
              width={120}
              height={120}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
