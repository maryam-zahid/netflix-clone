import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseHero from "@/components/browse/BrowseHero";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function MoviesPage() {
  const popularMovies = movies;

  const trendingMovies = [...movies].reverse();

  const actionMovies = [
    ...movies.slice(2),
    ...movies.slice(0, 2),
  ];

  const comedyMovies = [
    ...movies.slice(4),
    ...movies.slice(0, 4),
  ];

  const familyMovies = [
    ...movies.slice(6),
    ...movies.slice(0, 6),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <BrowseHero
        title="Movies"
        description="Watch blockbuster films, award-winning stories, action movies, comedies, and Netflix Originals."
        video="/videos/movies-hero.mp4"
        poster="/images/browse/movies-hero.jpg"
      />

      <div className="relative z-20 -mt-14 pb-10 sm:-mt-16 lg:-mt-20">
        <ContentRow
          title="Popular Movies"
          movies={popularMovies}
        />

        <ContentRow
          title="Trending Movies"
          movies={trendingMovies}
        />

        <ContentRow
          title="Action Movies"
          movies={actionMovies}
        />

        <ContentRow
          title="Comedy Movies"
          movies={comedyMovies}
        />

        <ContentRow
          title="Family Movies"
          movies={familyMovies}
        />
      </div>
      <BrowseFooter />
    </main>
  );
}