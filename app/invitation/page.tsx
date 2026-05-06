"use client";

import { useEffect, useRef } from "react";
import BrideGroom from "@/components/BrideGroom";
import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import WeddingGift from "@/components/WeddingGift";
import DoaPelamin from "@/components/DoaPelamin";

export default function InvitationPage() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play().catch(() => {
      // Autoplay mungkin diblokir browser, user perlu interact terlebih dahulu
    });
  }, []);

  return (
    <main>
      <audio ref={audioRef} src="/audio/wedding-music.mp3" loop className="hidden" />
      <Hero />
      <BrideGroom />
      <Event />
      <Gallery />
      <WeddingGift />
      <DoaPelamin />
      <Footer />
    </main>
  );
}

