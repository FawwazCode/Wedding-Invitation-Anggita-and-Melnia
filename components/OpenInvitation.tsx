"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface OpenInvitationProps {
  onOpen: () => void;
  autoOpenEnvelope?: boolean;
  autoOpenEnvelopeAfterMs?: number;
}

export default function OpenInvitation({
  onOpen,
  autoOpenEnvelope = false,
  autoOpenEnvelopeAfterMs = 350,
}: OpenInvitationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!autoOpenEnvelope) return;
    const id = window.setTimeout(() => setIsOpen(true), autoOpenEnvelopeAfterMs);
    return () => window.clearTimeout(id);
  }, [autoOpenEnvelope, autoOpenEnvelopeAfterMs]);

  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => setIsLetterVisible(true), 420);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  const handleProceed = () => {
    if (!isOpen) return;
    if (!isLetterVisible) return;
    onOpen();
  };

  function Envelope({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) {
    return (
      <motion.div
        className="relative aspect-[4/3] w-full"
        style={{ perspective: 1200 }}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        initial={false}
        animate={isHover && !isOpen ? { y: -2 } : { y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Floating shadow */}
        <motion.div
          className="absolute inset-0 rounded-3xl blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(0,0,0,0.55), rgba(0,0,0,0.0))",
          }}
          initial={false}
          animate={isHover && !isOpen ? { opacity: 0.9, scale: 1.02 } : { opacity: 0.75, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* Glow (premium hover) */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 0 60px rgba(255,255,255,0.10)",
          }}
          initial={false}
          animate={isHover && !isOpen ? { opacity: 1 } : { opacity: 0.45 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        {/* Envelope body */}
        <div className="absolute inset-0 rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/6 to-white/4 backdrop-blur-sm" />

        {/* Inner shadow / depth */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            boxShadow:
              "inset 0 18px 38px rgba(0,0,0,0.55), inset 0 -10px 22px rgba(0,0,0,0.35)",
          }}
        />

        {/* Bottom V fold */}
        <div
          className="absolute inset-x-0 bottom-0 top-1/3 rounded-3xl"
          style={{
            clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
          }}
        />

        {children}
      </motion.div>
    );
  }

  function Flap() {
    return (
      <motion.div
        className="absolute inset-x-0 top-0 z-[30] h-[52%] origin-top rounded-t-3xl"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          transformStyle: "preserve-3d",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          borderRight: "1px solid rgba(255,255,255,0.12)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
        initial={false}
        animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
        transition={{ duration: 0.95, ease: "easeInOut" }}
      />
    );
  }

  function Letter() {
    return (
      <motion.div
        className="absolute left-1/2 top-1/2 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur"
        initial={false}
        animate={
          isLetterVisible
            ? { y: -56, opacity: 1, scale: 1, zIndex: 60 }
            : { y: 26, opacity: 0, scale: 0.95, zIndex: 20 }
        }
        transition={
          isLetterVisible
            ? {
                delay: 0.12,
                type: "spring",
                stiffness: 260,
                damping: 18,
                mass: 0.8,
              }
            : { duration: 0.35, ease: "easeOut" }
        }
        style={{ transformOrigin: "center" }}
        onClick={(e) => {
          e.stopPropagation();
          handleProceed();
        }}
        role={isLetterVisible ? "button" : undefined}
        tabIndex={isLetterVisible ? 0 : -1}
        onKeyDown={(e) => {
          if (!isLetterVisible) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleProceed();
          }
        }}
      >
        <div className="w-full px-5 py-6 text-center">
          <AnimatePresence mode="wait">
            {isLetterVisible ? (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex max-h-[72vh] min-h-0 flex-col"
              >
                <div className="min-h-0 flex-1 overflow-y-auto px-1">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-white/90">
                    Undangan Pernikahan
                  </p>
                  <h1 className="mb-4 text-3xl font-serif uppercase tracking-[0.2em] text-white drop-shadow-[0_8px_30px_rgba(255,255,255,0.25)] sm:text-5xl">
                    Anggita <br />&<br /> Melnia
                  </h1>
                  <p className="mx-auto mb-5 max-w-xl text-xs leading-6 text-white/90 sm:text-sm">
                    Dengan senang hati kami mengundang Anda merayakan momen spesial kami. Hadir dan bersama-sama menciptakan kenangan indah dalam hari istimewa ini.
                  </p>
                  <div className="space-y-2 rounded-xl border border-white/15 bg-white/5 p-3">
                    <div className="text-base font-semibold text-white">06 Juni 2026</div>
                    <div className="text-xs text-white/80">Gedung Daarul Aitam, Jakarta Pusat</div>
                    <div className="flex justify-center gap-6 pt-2">
                      <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.15em] text-white/60">Akad Nikah</p>
                        <p className="mt-1 text-xs font-semibold text-white">07:00 WIB</p>
                      </div>
                      <div className="h-6 w-px bg-white/15" />
                      <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.15em] text-white/60">Resepsi</p>
                        <p className="mt-1 text-xs font-semibold text-white">10:00 - 12:00 WIB</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-3" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                  className="pt-4 text-[11px] uppercase tracking-[0.35em] text-white/60"
                >
                  Klik untuk masuk
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden bg-[#070707] text-white flex flex-col items-center justify-center px-4 sm:px-10">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a1410]/70 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-white/25 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-l from-white/25 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="mx-auto w-full max-w-[560px] select-none">
          <Envelope onClick={handleOpenEnvelope}>
            <Letter />
            <Flap />

            {/* Instruction (closed state) */}
            <motion.div
              className="absolute inset-x-0 bottom-4 z-[40] text-center text-[11px] uppercase tracking-[0.35em] text-white/70"
              initial={false}
              animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 6 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              Klik untuk membuka undangan
            </motion.div>
          </Envelope>
        </div>
      </motion.div>
    </section>
  );
}
