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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 via-white/8 to-white/3 p-7 shadow-[
        0_25px_60px_rgba(0,0,0,0.3),
        0_0_0_1px_rgba(255,255,255,0.08)_inset,
        -12px_-12px_35px_rgba(255,255,255,0.06)_inset,
        12px_12px_35px_rgba(0,0,0,0.35)_inset
      ] backdrop-blur-xl transition-all duration-700 hover:border-white/25 hover:shadow-[
        0_35px_80px_rgba(0,0,0,0.4),
        0_0_0_1px_rgba(255,255,255,0.12)_inset,
        -18px_-18px_45px_rgba(255,255,255,0.1)_inset,
        18px_18px_45px_rgba(0,0,0,0.45)_inset
      ]"
    >
      {/* Premium decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 0.6, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-2xl"
      />

      <div className="relative z-10">
        <div className="flex flex-col items-center gap-6 mb-6 text-center">
          {/* Premium Bank Logo with enhanced animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 150,
              damping: 15,
              delay: 0.1
            }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-xl border border-white/20 backdrop-blur-sm flex-shrink-0"
          >
            <Image
              src={logoSrc}
              alt={`${bankName} logo`}
              width={64}
              height={64}
              className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            />
          </motion.div>

          {/* Bank Info below logo */}
          <div className="w-full max-w-xs">
            {/* Bank Name with premium typography */}
            <motion.h3 
              initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.9, 0.2, 1] }}
              className="mb-2 text-xl text-white font-semibold tracking-wide text-center font-serif uppercase" 
              // style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {bankName}
            </motion.h3>

            {/* Account Holder with subtle animation */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-sm text-white/70" style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {accountHolder}
            </motion.p>
          </div>
        </div>

        {/* Premium Account Number section */}
        <div className="w-full max-w-xs space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.9, 0.2, 1] }}
            className="rounded-[16px] border border-white/10 bg-gradient-to-r from-white/8 to-white/4 px-5 py-4 backdrop-blur-sm text-center"
          >
            <span className="text-2xl tracking-[0.2em] text-white font-medium block mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
              {accountNumber}
            </span>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(201,169,110,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-gradient-to-r from-gold via-[#d4af37] to-[#f1c462] px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 shadow-lg relative overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {/* Premium glow effect on copy */}
              <motion.div
                initial={false}
                animate={copied ? { 
                  opacity: [0, 0.8, 0], 
                  scale: [0.8, 1.2, 1.4],
                  transition: { duration: 0.6, ease: "easeOut" }
                } : {}}
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none"
              />
              
              <motion.div 
                className="flex items-center justify-center gap-2 relative z-10"
                animate={copied ? { 
                  scale: [1, 0.95, 1.05, 1],
                  transition: { duration: 0.4, ease: "easeOut" }
                } : {}}
              >
                {/* Icon with smooth transition */}
                <motion.div
                  animate={copied ? {
                    rotate: [0, 360],
                    scale: [1, 0.8, 1],
                    opacity: [1, 0, 1],
                    transition: { 
                      duration: 0.5,
                      ease: "easeOut",
                      times: [0, 0.5, 1]
                    }
                  } : {
                    rotate: 0,
                    scale: 1,
                    opacity: 1
                  }}
                >
                  {copied ? (
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </motion.div>
                
                {/* Text with smooth fade */}
                <motion.span
                  animate={copied ? {
                    opacity: [1, 0, 1],
                    y: [0, -2, 0],
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut",
                      times: [0, 0.5, 1]
                    }
                  } : {}}
                  className="font-medium"
                >
                  {copied ? "Copied!" : "Copy"}
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const giftData = [
  {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "7660557185",
    accountHolder: "ANGGITA KURNIAWAN",
    logoSrc: "/images/logo-bca.png",
  },
  {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "7660538105",
    accountHolder: "MELNIA RISKA RAMADHANI",
    logoSrc: "/images/logo-bca.png",
  },
];

export default function WeddingGift() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#0f0d0b] to-[#0a0908]" />

      {/* Decorative blurred shapes */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gradient-to-r from-gold/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gradient-to-l from-gold/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl text-center">
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
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base relative z-20" style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Doa restu Anda merupakan anugerah yang paling bermakna bagi kami. 
          Namun, jika Anda ingin memberikan hadiah, kami sangat berterima kasih.
        </motion.p> */}

        {/* Gift Cards Grid - Premium animations for 2 BCA cards */}
        <div className="mt-16 flex flex-col items-center justify-center gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-2 lg:gap-12 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Card 1 - Elegant slide from left with rotation */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -8, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9, 
              delay: 0.3, 
              type: "spring", 
              stiffness: 80,
              damping: 20
            }}
            className="w-full max-w-sm mx-auto sm:max-w-none lg:max-w-md"
          >
            <GiftCard {...giftData[0]} />
          </motion.div>

          {/* Card 2 - Elegant slide from right with rotation */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 8, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.9, 
              delay: 0.5, 
              type: "spring", 
              stiffness: 80,
              damping: 20
            }}
            className="w-full max-w-sm mx-auto sm:max-w-none lg:max-w-md"
          >
            <GiftCard {...giftData[1]} />
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