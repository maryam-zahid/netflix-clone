import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function MyListPage() {
  const myListMovies = movies.slice(0, 4);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <section className="flex-1 px-0 pb-10 pt-24 sm:pt-28">
        <h1 className="mb-8 px-5 text-2xl font-semibold sm:px-8 sm:text-3xl lg:px-12">
          My List
        </h1>

        {myListMovies.length > 0 ? (
          <ContentRow
            title="Saved Movies & Shows"
            movies={myListMovies}
          />
        ) : (
          <div className="px-5 sm:px-8 lg:px-12">
            <p className="text-[#b3b3b3]">
              You have not added any movies to My List yet.
            </p>
          </div>
        )}
      </section>

      <BrowseFooter />
    </main>
  );
}