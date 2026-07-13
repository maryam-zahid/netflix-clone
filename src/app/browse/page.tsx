
// import BrowseHero from "@/components/browse/BrowseHero";
// import BrowseNavbar from "@/components/browse/BrowseNavbar";
// import ContentRow from "@/components/browse/ContentRow";
// import { movies } from "@/data/movies";

// export default function BrowsePage() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
//       <BrowseNavbar />
//       <BrowseHero />

//       <div className="relative z-20 -mt-20 pb-12 sm:-mt-24 lg:-mt-32">
//         <ContentRow title="Popular on Netflix" movies={movies} />

//         <ContentRow
//           title="Trending Now"
//           movies={[...movies].reverse()}
//         />

//         <ContentRow
//           title="Continue Watching"
//           movies={[...movies.slice(3), ...movies.slice(0, 3)]}
//         />
//       </div>
//     </main>
//   );
// }
import BrowseFooter from "@/components/browse/BrowseFooter";
import BrowseHero from "@/components/browse/BrowseHero";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function BrowsePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />

      <BrowseHero />

      <div className="relative z-20 -mt-14 pb-10 sm:-mt-16 lg:-mt-20">
        <ContentRow title="Popular on Netflix" movies={movies} />

        <ContentRow
          title="Trending Now"
          movies={[...movies].reverse()}
        />

        <ContentRow
          title="Continue Watching"
          movies={[...movies.slice(3), ...movies.slice(0, 3)]}
        />
      </div>
      <BrowseFooter />
    </main>
  );
}