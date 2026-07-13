"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/profiles");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background image */}
      <Image
        src="/images/landing/hero-background.jpg"
        alt="Netflix movies background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* Netflix logo */}
      <header className="relative z-20 px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Netflix home">
          <Image
            src="/images/netflix-logo.png"
            alt="Netflix"
            width={145}
            height={42}
            priority
            className="h-auto w-[110px] sm:w-[140px]"
          />
        </Link>
      </header>

      {/* Sign In form */}
      <section className="relative z-10 flex justify-center px-5 pb-20 pt-8 sm:pt-10">
        <div className="w-full max-w-[450px] rounded bg-black/75 px-7 py-10 sm:px-14 sm:py-14">
          <h1 className="text-3xl font-bold">Sign In</h1>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div>
              <label htmlFor="signin-email" className="sr-only">
                Email or phone number
              </label>

              <input
                id="signin-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email or phone number"
                required
                className="h-14 w-full rounded bg-[#333333] px-5 text-base text-white outline-none placeholder:text-[#b3b3b3] focus:bg-[#454545]"
              />
            </div>

            <div>
              <label htmlFor="signin-password" className="sr-only">
                Password
              </label>

              <input
                id="signin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
                minLength={6}
                className="h-14 w-full rounded bg-[#333333] px-5 text-base text-white outline-none placeholder:text-[#b3b3b3] focus:bg-[#454545]"
              />
            </div>

            <button
              type="submit"
              className="mt-5 h-12 w-full rounded bg-[#e50914] text-base font-semibold text-white transition-colors hover:bg-[#f6121d]"
            >
              Sign In
            </button>

            <div className="flex items-center justify-between text-sm text-[#b3b3b3]">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 accent-[#737373]"
                />

                Remember me
              </label>

              <Link href="#" className="hover:underline">
                Need help?
              </Link>
            </div>
          </form>

          <div className="mt-16 text-[#737373]">
            <p>
              New to Netflix?{" "}
              <Link
                href="/"
                className="font-medium text-white hover:underline"
              >
                Sign up now
              </Link>
            </p>

            <p className="mt-4 text-sm leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.
            </p>

            <button
              type="button"
              className="mt-2 text-sm text-[#0071eb] hover:underline"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/75 px-5 py-10 text-sm text-[#737373] sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1000px]">
          <p>Questions? Call 000-800-040-1843</p>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
            className="mt-7 rounded border border-[#737373] bg-black px-4 py-2 text-white outline-none"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>
      </footer>
    </main>
  );
}