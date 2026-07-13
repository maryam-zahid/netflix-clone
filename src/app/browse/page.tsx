// // import BrowseNavbar from "@/components/browse/BrowseNavbar";

// // export default function BrowsePage() {
// //   return (
// //     <main className="min-h-screen bg-[#141414] text-white">
// //       <BrowseNavbar />

// //       <section className="flex min-h-screen items-center justify-center px-6 pt-[68px]">
// //         <div className="text-center">
// //           <h1 className="text-4xl font-bold sm:text-5xl">
// //             Netflix Browse Page
// //           </h1>

// //           <p className="mt-4 text-lg text-[#b3b3b3]">
// //             Featured hero and movie rows will be added next.
// //           </p>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }
// import BrowseHero from "@/components/browse/BrowseHero";
// import BrowseNavbar from "@/components/browse/BrowseNavbar";

// export default function BrowsePage() {
//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
//       <BrowseNavbar />
//       <BrowseHero />
//     </main>
//   );
// }
import BrowseHero from "@/components/browse/BrowseHero";
import BrowseNavbar from "@/components/browse/BrowseNavbar";
import ContentRow from "@/components/browse/ContentRow";
import { movies } from "@/data/movies";

export default function BrowsePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141414] text-white">
      <BrowseNavbar />
      <BrowseHero />

      <div className="relative z-20 -mt-20 pb-12 sm:-mt-24 lg:-mt-32">
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
    </main>
  );
}