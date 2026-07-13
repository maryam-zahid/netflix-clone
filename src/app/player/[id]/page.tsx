// import VideoPlayer from "@/components/browse/VideoPlayer";
// import { movies } from "@/data/movies";

// type PlayerPageProps = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// export default async function PlayerPage({
//   params,
// }: PlayerPageProps) {
//   const { id } = await params;

//   const movie =
//     movies.find((item) => item.id === Number(id)) ?? movies[0];

//   return (
//     <VideoPlayer
//       title={movie.title}
//       video={movie.previewVideo ?? "/videos/browse-hero.mp4"}
//       poster={movie.thumbnail}
//     />
//   );
// }
import VideoPlayer from "@/components/browse/VideoPlayer";
import { movies } from "@/data/movies";

type PlayerPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlayerPage({
  params,
}: PlayerPageProps) {
  const { id } = await params;

  const movie =
    movies.find((item) => item.id === Number(id)) ?? movies[0];

  return (
    <VideoPlayer
      title={movie.title}
      video={movie.previewVideo ?? "/videos/browse-hero.mp4"}
      poster={movie.thumbnail}
    />
  );
}