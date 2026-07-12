"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const planBenefits = [
  "No commitments, cancel anytime.",
  "Everything on Netflix for one low price.",
  "Unlimited viewing on all your devices.",
];

export default function PlanPage() {
  const router = useRouter();

  function handleNext() {
    router.push("/signup/plan-selection");
  }

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

      <section className="flex flex-1 items-center px-6 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[440px] text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e50914]">
            <Check className="h-8 w-8 text-[#e50914]" strokeWidth={2.5} />
          </div>

          <p className="mt-6 text-sm uppercase">
            Step <span className="font-semibold">2</span> of{" "}
            <span className="font-semibold">3</span>
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight">
            Choose your plan.
          </h1>

          <div className="mt-7 space-y-5 text-left">
            {planBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 h-6 w-6 shrink-0 text-[#e50914]"
                  strokeWidth={2.5}
                />

                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="mt-9 h-16 w-full rounded bg-[#e50914] text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#f6121d]"
          >
            Next
          </button>
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