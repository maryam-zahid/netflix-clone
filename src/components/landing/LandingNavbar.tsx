import Link from "next/link";

export default function LandingNavbar() {
  return (
    <header className="absolute left-0 top-0 z-30 w-full">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-3xl font-black uppercase tracking-[-2px] text-[#e50914] sm:text-4xl"
        >
          Netflix
        </Link>

        <div className="flex items-center gap-3">
          <select
            aria-label="Select language"
            defaultValue="English"
            className="hidden rounded border border-white/60 bg-black/50 px-3 py-1.5 text-sm text-white outline-none backdrop-blur-sm focus:border-white sm:block"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>

          <Link
            href="/signin"
            className="rounded bg-[#e50914] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c11119]"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}