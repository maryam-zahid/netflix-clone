export type Profile = {
  id: number;
  name: string;
  image: string;
};

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Maryam",
    image: "/images/profiles/maryam.png",
  },
  {
    id: 2,
    name: "Family",
    image: "/images/profiles/family.png",
  },
  {
    id: 3,
    name: "Kids",
    image: "/images/profiles/children.png",
  },
  {
    id: 4,
    name: "Guest",
    image: "/images/profiles/guest.png",
  },
];