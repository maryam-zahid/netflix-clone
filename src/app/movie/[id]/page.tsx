import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Play, Plus, ThumbsUp } from "lucide-react";
import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import MovieCard from "@/components/browse/MovieCard";
import { movies } from "@/data/movies";

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { id } = await params;

  const movie =
    movies.find((item) => item.id === Number(id)) ?? movies[0];

  const similarMovies = movies.filter(
    (item) => item.id !== movie.id,
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <section className="relative min-h-[580px] overflow-hidden pt-16 sm:min-h-[650px]">
        {/* <Image
          src={movie.thumbnail}
          alt={movie.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        /> */}
        <Image
  src="/images/browse/hero-poster.jpg"
  alt={movie.title}
  fill
  priority
  sizes="100vw"
  className="object-cover object-center"
/>

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />

        <div className="relative z-10 flex min-h-[580px] items-end px-4 pb-20 sm:min-h-[650px] sm:px-8 lg:px-12">
          <div className="w-full max-w-[650px]">
            <Link
              href="/browse"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </Link>

            <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
              {movie.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm sm:text-base">
              <span className="font-semibold text-[#46d369]">
                {movie.match}% Match
              </span>

              <span>{movie.year}</span>

              <span className="border border-[#808080] px-1.5 py-0.5">
                {movie.maturityRating}
              </span>

              <span>{movie.duration}</span>

              <span className="rounded border border-white/60 px-1.5 py-0.5 text-xs">
                HD
              </span>
            </div>

            <p className="mt-5 max-w-[600px] text-sm leading-relaxed text-[#e5e5e5] sm:text-base lg:text-lg">
              Watch {movie.title}, an exciting story filled with suspense,
              memorable characters and unforgettable moments.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/player/${movie.id}`}
                className="flex items-center gap-2 rounded bg-white px-6 py-3 font-bold text-black transition hover:bg-white/80"
              >
                <Play className="h-5 w-5 fill-black" />
                Play
              </Link>

              <button
                type="button"
                aria-label="Add to My List"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#808080] bg-black/40 hover:border-white"
              >
                <Plus className="h-5 w-5" />
              </button>

              <button
                type="button"
                aria-label="Like movie"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#808080] bg-black/40 hover:border-white"
              >
                <ThumbsUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">
              About {movie.title}
            </h2>

            <p className="mt-4 max-w-[750px] text-base leading-relaxed text-[#d2d2d2]">
              This frontend-only page displays movie information using reusable
              data from the movies array. No backend or database is used.
            </p>
          </div>

          <div className="text-sm leading-relaxed text-[#d2d2d2]">
            <p>
              <span className="text-[#777777]">Genres: </span>
              {movie.genres.join(", ")}
            </p>

            <p className="mt-3">
              <span className="text-[#777777]">This show is: </span>
              Exciting, Suspenseful, Entertaining
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 lg:px-12">
        <h2 className="mb-5 text-2xl font-semibold">
          More Like This
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* {similarMovies.slice(0, 6).map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))} */}
          {similarMovies.slice(0, 6).map((item) => (
  <MovieCard
    key={item.id}
    movie={item}
    fullWidth
  />
))}
        </div>
      </section>

      <BrowseFooter />
    </main>
  );
}