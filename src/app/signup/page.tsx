"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const emailFromLandingPage = searchParams.get("email") ?? "";

  const [email, setEmail] = useState(emailFromLandingPage);
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/signup/plan");
  }

  return (
    <main className="min-h-screen bg-white text-[#333333]">
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

      <section className="px-6 py-12 sm:py-16">
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

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="signup-email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                className="h-14 w-full rounded-sm border border-[#8c8c8c] bg-white px-4 text-base text-black outline-none transition focus:border-[#0071eb] focus:ring-1 focus:ring-[#0071eb]"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="mb-2 block text-sm font-medium"
              >
                Add a password
              </label>

              <input
                id="signup-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="h-14 w-full rounded-sm border border-[#8c8c8c] bg-white px-4 text-base text-black outline-none transition focus:border-[#0071eb] focus:ring-1 focus:ring-[#0071eb]"
              />
            </div>

            <button
              type="submit"
              className="h-16 w-full rounded bg-[#e50914] text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#f6121d]"
            >
              Next
            </button>
          </form>
        </div>
      </section>

      <footer className="mt-auto border-t border-[#e6e6e6] bg-[#f3f3f3] px-6 py-10 text-[#737373]">
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