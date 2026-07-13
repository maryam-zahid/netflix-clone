"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Profile } from "@/data/profiles";

type ProfileCardProps = {
  profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const router = useRouter();

  function handleProfileSelect() {
    router.push("/browse");
  }

  return (
    <button
      type="button"
      onClick={handleProfileSelect}
      className="group w-full text-center"
    >
      <div className="relative aspect-square overflow-hidden rounded-md border-4 border-transparent bg-[#333333] transition-all duration-200 group-hover:scale-105 group-hover:border-white">
        <Image
          src={profile.image}
          alt={`${profile.name} profile`}
          fill
          sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 180px"
          className="object-cover"
        />
      </div>

      <p className="mt-3 text-base text-[#808080] transition-colors duration-200 group-hover:text-white sm:text-lg">
        {profile.name}
      </p>
    </button>
  );
}