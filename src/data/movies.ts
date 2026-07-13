export type Movie = {
  id: number;
  title: string;
  thumbnail: string;
  previewVideo?: string;
  year: number;
  maturityRating: string;
  duration: string;
  match: number;
  genres: string[];
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "PK",
    thumbnail: "/images/movies/pk.jpg",
    previewVideo: "/videos/previews/pk.mp4",
    year: 2023,
    maturityRating: "18+",
    duration: "2h 3m",
    match: 96,
    genres: ["Action", "Thriller"],
  },
  {
    id: 2,
    title: "Stranger Things",
    thumbnail: "/images/movies/stranger-things.jpg",
    previewVideo: "/videos/previews/the-stranger.mp4",
    year: 2022,
    maturityRating: "16+",
    duration: "4 Seasons",
    match: 98,
    genres: ["Sci-Fi", "Drama"],
  },
  {
    id: 3,
    title: "Chal Mera Putt 2",
    thumbnail: "/images/movies/putt.png",
    previewVideo: "/videos/previews/putt.mp4",
    year: 2021,
    maturityRating: "18+",
    duration: "5 Parts",
    match: 97,
    genres: ["Crime", "Thriller"],
  },
  {
    id: 4,
    title: "Wednesday",
    thumbnail: "/images/movies/wednesday.png",
    previewVideo: "/videos/previews/wednesday.mp4",
    year: 2022,
    maturityRating: "13+",
    duration: "1 Season",
    match: 95,
    genres: ["Fantasy", "Mystery"],
  },
  {
    id: 5,
    title: "Dark",
    thumbnail: "/images/movies/dark.png",
    previewVideo: "/videos/previews/dark.mp4",
    year: 2020,
    maturityRating: "16+",
    duration: "3 Seasons",
    match: 94,
    genres: ["Mystery", "Sci-Fi"],
  },
  {
    id: 6,
    title: "The Crown",
    thumbnail: "/images/movies/the-crown.png",
    previewVideo: "/videos/previews/the-crown.mp4",
    year: 2023,
    maturityRating: "16+",
    duration: "6 Seasons",
    match: 92,
    genres: ["Drama", "History"],
  },
];