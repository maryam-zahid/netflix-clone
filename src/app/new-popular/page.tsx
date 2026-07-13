import BrowseHero from "@/components/browse/BrowseHero";
import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function NewPopularPage() {
  const comingThisWeek = movies;

  const topTen = [...movies].reverse();

  const newReleases = [
    ...movies.slice(2),
    ...movies.slice(0, 2),
  ];

  const worthTheWait = [
    ...movies.slice(4),
    ...movies.slice(0, 4),
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <BrowseHero
        title="New & Popular"
        description="Discover new releases, trending titles, and the most popular shows and movies on Netflix."
        video="/videos/browse-hero.mp4"
        poster="/images/browse/hero-poster.jpg"
      />

      <div className="relative z-20 -mt-14 pb-10 sm:-mt-16 lg:-mt-20">
        <ContentRow
          title="Coming This Week"
          movies={comingThisWeek}
        />

        <ContentRow
          title="Top 10 in Pakistan Today"
          movies={topTen}
        />

        <ContentRow
          title="New Releases"
          movies={newReleases}
        />

        <ContentRow
          title="Worth the Wait"
          movies={worthTheWait}
        />
      </div>
      <BrowseFooter />
    </main>
  );
}