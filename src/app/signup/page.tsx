import Link from "next/link";
import { Suspense } from "react";
import SignupForm from "@/components/signup/SignupForm";

function SignupFormFallback() {
  return (
    <div className="mt-6 space-y-4">
      <div className="h-14 animate-pulse rounded-sm bg-[#e5e5e5]" />
      <div className="h-14 animate-pulse rounded-sm bg-[#e5e5e5]" />
      <div className="h-16 animate-pulse rounded bg-[#e50914]/70" />
    </div>
  );
}

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-[#333333]">
      <header className="border-b border-[#e6e6e6]">
        <nav className="mx-auto flex min-h-[90px] w-full max-w-[1400px] items-center justify-between px-5 sm:px-10">
          <Link
            href="/"
            className="text-3xl font-black uppercase tracking-[-2px] text-[#e50914] sm:text-4xl"
          >
            Netflix
          </Link>

          <Link
            href="/signin"
            className="text-base font-semibold text-[#333333] hover:underline sm:text-lg"
          >
            Sign In
          </Link>
        </nav>
      </header>

      <section className="flex-1 px-6 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[440px]">
          <p className="text-sm uppercase">
            Step <span className="font-semibold">1</span> of{" "}
            <span className="font-semibold">3</span>
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight">
            Create a password to start your membership
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Just a few more steps and you&apos;re done!
          </p>

          <p className="text-lg">We hate paperwork, too.</p>

          <Suspense fallback={<SignupFormFallback />}>
            <SignupForm />
          </Suspense>
        </div>
      </section>

      <footer className="border-t border-[#e6e6e6] bg-[#f3f3f3] px-6 py-10 text-[#737373]">
        <div className="mx-auto w-full max-w-[1000px]">
          <p>Questions? Contact us.</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <Link href="#" className="hover:underline">
              FAQ
            </Link>

            <Link href="#" className="hover:underline">
              Help Centre
            </Link>

            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>

            <Link href="#" className="hover:underline">
              Privacy
            </Link>

            <Link href="#" className="hover:underline">
              Cookie Preferences
            </Link>

            <Link href="#" className="hover:underline">
              Corporate Information
            </Link>
          </div>

          <select
            aria-label="Select language"
            defaultValue="English"
            className="mt-7 rounded border border-[#737373] bg-white px-4 py-2 text-sm text-[#333333]"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>
      </footer>
    </main>
  );
}