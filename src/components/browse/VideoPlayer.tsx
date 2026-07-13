"use client";

import {
  ArrowLeft,
  Maximize,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type VideoPlayerProps = {
  title: string;
  video: string;
  poster: string;
};

export default function VideoPlayer({
  title,
  video,
  poster,
}: VideoPlayerProps) {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  function togglePlay() {
    const currentVideo = videoRef.current;

    if (!currentVideo) {
      return;
    }

    if (currentVideo.paused) {
      currentVideo.play().catch(() => {
        // Playback may be blocked until user interaction.
      });
    } else {
      currentVideo.pause();
    }
  }

  function toggleMute() {
    const currentVideo = videoRef.current;

    if (!currentVideo) {
      return;
    }

    currentVideo.muted = !currentVideo.muted;
    setIsMuted(currentVideo.muted);
  }

  function skip(seconds: number) {
    const currentVideo = videoRef.current;

    if (!currentVideo) {
      return;
    }

    currentVideo.currentTime = Math.max(
      0,
      Math.min(
        currentVideo.duration || currentVideo.currentTime + seconds,
        currentVideo.currentTime + seconds,
      ),
    );
  }

  function enterFullscreen() {
    const currentVideo = videoRef.current;

    if (!currentVideo) {
      return;
    }

    currentVideo.requestFullscreen().catch(() => {
      // Fullscreen may not be supported in every browser.
    });
  }

  return (
    <main className="group relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        poster={poster}
        className="h-screen w-full object-contain"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support video playback.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute left-4 top-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-6 sm:top-6">
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-black/80"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:px-8 sm:pb-8">
        <p className="mb-4 text-lg font-semibold sm:text-2xl">
          {title}
        </p>

        <div className="mb-4 h-1.5 w-full overflow-hidden rounded bg-white/30">
          <div className="h-full w-1/3 rounded bg-[#e50914]" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="transition-transform hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="h-7 w-7 fill-white" />
              ) : (
                <Play className="h-7 w-7 fill-white" />
              )}
            </button>

            <button
              type="button"
              onClick={() => skip(-10)}
              aria-label="Go back 10 seconds"
              className="transition-transform hover:scale-110"
            >
              <RotateCcw className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => skip(10)}
              aria-label="Skip 10 seconds"
              className="transition-transform hover:scale-110"
            >
              <RotateCw className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="transition-transform hover:scale-110"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={enterFullscreen}
            aria-label="Enter fullscreen"
            className="transition-transform hover:scale-110"
          >
            <Maximize className="h-6 w-6" />
          </button>
        </div>
      </div>
    </main>
  );
}