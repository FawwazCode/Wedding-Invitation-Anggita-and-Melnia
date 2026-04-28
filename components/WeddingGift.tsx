"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface GiftCardProps {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  logoSrc: string;
}

const GiftCard = ({ bankName, accountNumber, accountHolder, logoSrc }: GiftCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -12, 
        rotateX: 5,
        rotateY: -5,
        transition: { duration: 0.3 } 
      }}
      className="group relative overflow-hidden rounded-[24px] border border-white/20 bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-6 shadow-[
        0_20px_50px_rgba(0,0,0,0.25),
        0_0_0_1px_rgba(255,255,255,0.1)_inset,
        -10px_-10px_30px_rgba(255,255,255,0.05)_inset,
        10px_10px_30px_rgba(0,0,0,0.3)_inset
      ] backdrop-blur-xl transition-all duration-500 hover:border-white/40 hover:shadow-[
        0_30px_60px_rgba(0,0,0,0.35),
        0_0_0_1px_rgba(255,255,255,0.15)_inset,
        -15px_-15px_40px_rgba(255,255,255,0.08)_inset,
        15px_15px_40px_rgba(0,0,0,0.4)_inset
      ]"
    >
      {/* Decorative gradient */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-gold/30 to-transparent opacity-50 blur-2xl transition duration-500 group-hover:opacity-70" />

      <div className="relative z-10">
        {/* Bank/E-wallet Logo - Pop in animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl p-2 shadow-lg border border-white"
        >
          <Image
            src={logoSrc}
            alt={`${bankName} logo`}
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Bank Name - Slide from left */}
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-1 text-lg font-semibold text-white font-serif tracking-wide"
        >
          {bankName}
        </motion.h3>

        {/* Account Holder - Fade in */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-4 text-sm text-white/70"
        >
          {accountHolder}
        </motion.p>

        {/* Account Number - Slide up */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center justify-between rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-white"
        >
          <span className="font-mono text-lg tracking-wider text-gold-light">
            {accountNumber}
          </span>
          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-gold to-[#f1c462] px-3 py-1.5 text-xs font-semibold text-black transition duration-300 hover:shadow-[0_4px_15px_rgba(201,169,110,0.4)]"
          >
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const giftData = [
  {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "XXXXXXXXXXX",
    accountHolder: "Melnia Riska Ramadhani",
    logoSrc: "/images/logo-bca.png",
  },
  {
    bankName: "Bank Mandiri",
    accountNumber: "XXXXXXXXXXX",
    accountHolder: "Anggita Kurniawan",
    logoSrc: "/images/logo-mandiri.png",
  },
  {
    bankName: "DANA",
    accountNumber: "XXXXXXXXXXX",
    accountHolder: "Melnia Riska R",
    logoSrc: "/images/logo-dana.png",
  },
];

export default function WeddingGift() {
  return (
    <section className="relative overflow-hidden py-24 px-6 sm:px-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#0f0d0b] to-[#0a0908]" />

      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gradient-to-r from-gold/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gradient-to-l from-gold/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-5xl text-center">
        {/* Section Title - Fade in from top */}
        <motion.p
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-white"
        >
          Wedding Gift
        </motion.p>

        {/* Heading - Scale up fade in */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl"
        >
          Wedding Gift
        </motion.h2>

        {/* Description - Fade in from bottom */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base"
        >
          Doa restu Anda merupakan anugerah yang paling bermakna bagi kami. 
          Namun, jika Anda ingin memberikan hadiah, kami sangat berterima kasih.
        </motion.p>

        {/* Gift Cards Grid - Different animations for each card */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Slide from left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <GiftCard {...giftData[0]} />
          </motion.div>

          {/* Card 2 - Scale up from center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: "backOut" }}
          >
            <GiftCard {...giftData[1]} />
          </motion.div>

          {/* Card 3 - Slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <GiftCard {...giftData[2]} />
          </motion.div>
        </div>

        {/* Closing message - Blur fade in */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-sm italic text-white/60"
        >
          Terima kasih atas kebaikan hati Anda 💛
        </motion.p>
      </div>
    </section>
  );
}