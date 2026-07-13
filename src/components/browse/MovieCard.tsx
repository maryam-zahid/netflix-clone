"use client";

import Image from "next/image";
import { Check, ChevronDown, Play, Plus, ThumbsUp } from "lucide-react";
import { useRef, useState } from "react";
import type { Movie } from "@/data/movies";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInMyList, setIsInMyList] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);

    window.setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // Browser may prevent playback until user interaction.
      });
    }, 250);
  }

  function handleMouseLeave() {
    setIsHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative min-w-[220px] flex-none sm:min-w-[260px] lg:min-w-[300px]"
    >
      <div className="relative overflow-hidden rounded-md bg-[#181818] shadow-lg transition-all duration-300 group-hover:z-30 group-hover:scale-110 group-hover:shadow-2xl">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={movie.thumbnail}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
            className={`object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />

          {movie.previewVideo && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              poster={movie.thumbnail}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={movie.previewVideo} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="hidden bg-[#181818] p-4 group-hover:block">
          <h3 className="truncate text-base font-semibold text-white">
            {movie.title}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={`Play ${movie.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
              >
                <Play className="h-4 w-4 fill-black" />
              </button>

              <button
                type="button"
                onClick={() => setIsInMyList((current) => !current)}
                aria-label={
                  isInMyList
                    ? `Remove ${movie.title} from My List`
                    : `Add ${movie.title} to My List`
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#808080] text-white transition-colors hover:border-white"
              >
                {isInMyList ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </button>

              <button
                type="button"
                aria-label={`Like ${movie.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#808080] text-white transition-colors hover:border-white"
              >
                <ThumbsUp className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              aria-label={`More information about ${movie.title}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#808080] text-white transition-colors hover:border-white"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="font-semibold text-[#46d369]">
              {movie.match}% Match
            </span>

            <span className="border border-[#808080] px-1 text-[#d2d2d2]">
              {movie.maturityRating}
            </span>

            <span className="text-[#d2d2d2]">{movie.duration}</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#d2d2d2]">
            {movie.genres.map((genre, index) => (
              <span key={genre} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-[#777777]" />
                )}

                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}