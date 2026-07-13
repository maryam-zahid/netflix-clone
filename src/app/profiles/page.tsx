import Link from "next/link";
import { Plus } from "lucide-react";
import ProfileCard from "@/components/profiles/ProfileCard";
import { profiles } from "@/data/profiles";

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <header className="px-6 py-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="text-3xl font-black uppercase tracking-[-2px] text-[#e50914] sm:text-4xl"
        >
          Netflix
        </Link>
      </header>

      <section className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 pb-16">
        <div className="w-full max-w-[1000px] text-center">
          <h1 className="text-3xl font-medium sm:text-5xl lg:text-6xl">
            Who&apos;s watching?
          </h1>

          <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}

            <button
              type="button"
              className="group w-full text-center"
            >
              <div className="flex aspect-square items-center justify-center rounded-md border-4 border-transparent bg-[#2a2a2a] transition-all duration-200 group-hover:scale-105 group-hover:border-white">
                <Plus className="h-14 w-14 text-[#808080] transition-colors duration-200 group-hover:text-white sm:h-16 sm:w-16" />
              </div>

              <p className="mt-3 text-base text-[#808080] transition-colors duration-200 group-hover:text-white sm:text-lg">
                Add Profile
              </p>
            </button>
          </div>

          <button
            type="button"
            className="mt-12 border border-[#808080] px-6 py-2 text-sm uppercase tracking-[2px] text-[#808080] transition-colors duration-200 hover:border-white hover:text-white sm:text-base"
          >
            Manage Profiles
          </button>
        </div>
      </section>
    </main>
  );
}