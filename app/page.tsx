"use client";

import { useState, useEffect, useRef } from "react";
import BrideGroom from "@/components/BrideGroom";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import OpenInvitation from "@/components/OpenInvitation";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay mungkin diblokir browser, user perlu interact terlebih dahulu
      });
    }
  }, [isOpened]);

  if (!isOpened) {
    return <OpenInvitation onOpen={() => setIsOpened(true)} />;
  }

  return (
    <main>
      <audio
        ref={audioRef}
        src="/audio/wedding-music.mp3"
        loop
        className="hidden"
      />
      <Hero />
      <BrideGroom />
      <Event />
      <Gallery />
      <Footer />
    </main>
  );
}