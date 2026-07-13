import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseHero from "@/components/browse/BrowseHero";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function TVShowsPage() {
  const popularShows = movies;

  const trendingShows = [...movies].reverse();

  const dramaShows = [
    ...movies.slice(2),
    ...movies.slice(0, 2),
  ];

  const sciFiShows = [
    ...movies.slice(4),
    ...movies.slice(0, 4),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <BrowseHero
        title="TV Shows"
        description="Watch popular dramas, thrillers, comedies, sci-fi series, and Netflix Originals."
        video="/videos/browse-hero.mp4"
        poster="/images/browse/hero-poster.jpg"
      />

      <div className="relative z-20 -mt-14 pb-6 sm:-mt-16 lg:-mt-20">
        <ContentRow
          title="Popular TV Shows"
          movies={popularShows}
        />

        <ContentRow
          title="Trending TV Shows"
          movies={trendingShows}
        />

        <ContentRow
          title="Drama Series"
          movies={dramaShows}
        />

        <ContentRow
          title="Sci-Fi & Fantasy"
          movies={sciFiShows}
        />
      </div>

      <BrowseFooter />
    </main>
  );
}