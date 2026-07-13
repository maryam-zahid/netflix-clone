"use client";

import { Info, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function BrowseHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  function handleMuteToggle() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#141414] sm:min-h-[78vh] lg:min-h-[88vh]">
      {/* Hero video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/browse/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/browse-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[72vh] items-center px-6 pb-20 pt-28 sm:min-h-[78vh] sm:px-10 lg:min-h-[88vh] lg:px-14">
        <div className="max-w-[600px]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#e5e5e5] sm:text-base">
            Netflix Original
          </p>

          <h1 className="text-4xl font-black leading-none sm:text-6xl lg:text-7xl">
            Money Heist
          </h1>

          <p className="mt-5 max-w-[540px] text-sm leading-relaxed text-white sm:text-base lg:text-lg">
            Eight thieves take hostages and lock themselves inside the Royal
            Mint while a criminal mastermind manipulates the police to carry
            out his ambitious plan.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-white px-6 py-3 text-base font-bold text-black transition-colors duration-200 hover:bg-white/75 sm:px-8 sm:text-lg"
            >
              <Play className="h-5 w-5 fill-black sm:h-6 sm:w-6" />
              Play
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded bg-[#6d6d6e]/75 px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-[#6d6d6e]/50 sm:px-8 sm:text-lg"
            >
              <Info className="h-5 w-5 sm:h-6 sm:w-6" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Sound control */}
      <div className="absolute bottom-24 right-0 z-20 flex items-center sm:bottom-28">
        <button
          type="button"
          onClick={handleMuteToggle}
          aria-label={isMuted ? "Unmute preview" : "Mute preview"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/30 text-white transition-colors hover:bg-black/60 sm:h-12 sm:w-12"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>

        <div className="ml-3 border-l-4 border-white bg-[#333333]/70 px-4 py-2 text-sm text-white sm:px-6">
          18+
        </div>
      </div>
    </section>
  );
}