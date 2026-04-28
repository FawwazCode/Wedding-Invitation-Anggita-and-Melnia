"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type PelaminIntroProps = {
  onComplete: () => void;
};

// Global timing config (keep consistent across all images)
const ENTER_DURATION = 0.6; // seconds
const EXIT_DURATION = 0.6; // seconds
const STAY_DURATION = 0.5; // seconds
const GAP_DELAY = 0.25; // seconds (between images)
const EASE_PREMIUM: [number, number, number, number] = [0.2, 0.9, 0.2, 1];

export default function PelaminIntro({ onComplete }: PelaminIntroProps) {
  const router = useRouter();
  const images = useMemo(
    () => ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg"],
    [],
  );
  const hasRunRef = useRef(false);
  const doneRef = useRef(false);
  const cancelledRef = useRef(false);
  const navigateOnceRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isFinished) return;
    if (navigateOnceRef.current) return;
    navigateOnceRef.current = true;

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("Animation finished, navigating...");
    }

    // Keep last frame visible briefly to avoid black flash.
    const id = window.setTimeout(() => {
      router.push("/open-invitation");
    }, 200);

    return () => window.clearTimeout(id);
  }, [isFinished, router]);

  useEffect(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;
    cancelledRef.current = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(() => resolve(), ms);
      });

    const run = async () => {
      if (doneRef.current) return;
      setIsAnimating(true);

      const gapMs = GAP_DELAY * 1000;
      const enterMs = ENTER_DURATION * 1000;
      const stayMs = STAY_DURATION * 1000;
      const exitMs = EXIT_DURATION * 1000;

      for (let i = 0; i < images.length; i++) {
        if (cancelledRef.current) return;

        // gap before next image
        setIsVisible(false);
        setCurrentIndex(-1);
        await sleep(gapMs);

        // enter
        setPhase("in");
        setCurrentIndex(i);
        setIsVisible(true);
        await sleep(enterMs);

        // stay
        await sleep(stayMs);

        // exit
        setPhase("out");
        setIsVisible(false);
        await sleep(exitMs);
      }

      if (cancelledRef.current) return;
      // Hold last frame to prevent a blank (black) moment before navigation.
      setPhase("in");
      setCurrentIndex(images.length - 1);
      setIsVisible(true);
      setIsFinished(true);
    };

    void run();

    return () => {
      cancelledRef.current = true;
    };
    // Intentionally run once on mount (avoid restart on re-render)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeSrc =
    currentIndex >= 0 && currentIndex < images.length ? images[currentIndex] : null;
  const progress =
    currentIndex < 0 ? 0 : Math.min((currentIndex + 1) / images.length, 1);

  return (
    <section className="relative h-screen overflow-hidden bg-[#070707] text-white">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (doneRef.current) return;
          if (!cancelledRef.current && isFinished && isAnimating) {
            doneRef.current = true;
            setIsAnimating(false);
            onComplete();
          }
        }}
      >
        {activeSrc && isVisible ? (
          <motion.div
            key={`${currentIndex}-${activeSrc}`}
            className="absolute inset-0"
            initial={
              phase === "in"
                ? { opacity: 0, scale: 0.9, y: 0, filter: "blur(14px)" }
                : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
            }
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: -12, filter: "blur(6px)" }}
            transition={{
              duration: phase === "in" ? ENTER_DURATION : EXIT_DURATION,
              ease: EASE_PREMIUM,
            }}
          >
            <Image
              src={activeSrc}
              alt="Pelamin"
              fill
              sizes="100vw"
              className="object-cover object-center brightness-90"
              // Intro is above-the-fold; LCP can occur on later frames too, so prioritize.
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-end justify-center px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          className="w-full max-w-md"
        >
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full bg-white/70"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress * 100, 100)}%` }}
              transition={{ duration: 0.45, ease: EASE_PREMIUM }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

