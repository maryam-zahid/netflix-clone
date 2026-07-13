"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import MovieCard from "@/components/browse/MovieCard";
import type { Movie } from "@/data/movies";

type ContentRowProps = {
  title: string;
  movies: Movie[];
};

export default function ContentRow({
  title,
  movies,
}: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  function handleScroll(direction: "left" | "right") {
    if (!rowRef.current) {
      return;
    }

    const scrollAmount = rowRef.current.clientWidth * 0.8;

    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="group/row relative mb-10">
      <h2 className="mb-4 px-6 text-xl font-semibold text-white sm:px-10 sm:text-2xl lg:px-14">
        {title}
      </h2>

      <div className="relative">
        <button
          type="button"
          onClick={() => handleScroll("left")}
          aria-label={`Scroll ${title} left`}
          className="absolute left-0 top-0 z-40 hidden h-full w-12 items-center justify-center bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover/row:opacity-100 md:flex"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          ref={rowRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto overflow-y-visible px-6 pb-16 pt-2 sm:px-10 lg:px-14 [&::-webkit-scrollbar]:hidden"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleScroll("right")}
          aria-label={`Scroll ${title} right`}
          className="absolute right-0 top-0 z-40 hidden h-full w-12 items-center justify-center bg-black/60 text-white opacity-0 transition-opacity hover:bg-black/80 group-hover/row:opacity-100 md:flex"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}