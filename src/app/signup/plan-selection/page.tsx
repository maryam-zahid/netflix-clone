"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const plans = [
  {
    id: "mobile",
    name: "Mobile",
    price: "Rs 250",
    quality: "Good",
    resolution: "480p",
    devices: "Phone, Tablet",
  },
  {
    id: "basic",
    name: "Basic",
    price: "Rs 450",
    quality: "Good",
    resolution: "720p",
    devices: "Phone, Tablet, Computer, TV",
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rs 800",
    quality: "Better",
    resolution: "1080p",
    devices: "Phone, Tablet, Computer, TV",
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rs 1,100",
    quality: "Best",
    resolution: "4K + HDR",
    devices: "Phone, Tablet, Computer, TV",
  },
];

export default function PlanSelectionPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("standard");

  function handleNext() {
    router.push("/profiles");
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

      <section className="flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="mx-auto w-full max-w-[1050px]">
          <p className="text-sm uppercase">
            Step <span className="font-semibold">3</span> of{" "}
            <span className="font-semibold">3</span>
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            Choose the plan that&apos;s right for you
          </h1>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-6 w-6 shrink-0 text-[#e50914]"
                strokeWidth={2.5}
              />
              <p className="text-lg">
                Watch all you want. Ad-free.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-6 w-6 shrink-0 text-[#e50914]"
                strokeWidth={2.5}
              />
              <p className="text-lg">
                Recommendations just for you.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-6 w-6 shrink-0 text-[#e50914]"
                strokeWidth={2.5}
              />
              <p className="text-lg">
                Change or cancel your plan anytime.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[850px]">
              <div className="grid grid-cols-[220px_repeat(4,1fr)] gap-2">
                <div />

                {plans.map((plan) => {
                  const isSelected = selectedPlan === plan.id;

                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`relative flex h-28 items-center justify-center rounded-sm px-3 text-lg font-semibold text-white transition-all duration-200 ${
                        isSelected
                          ? "bg-[#e50914]"
                          : "bg-[#ef6b72] hover:bg-[#e50914]"
                      }`}
                    >
                      {plan.name}

                      {isSelected && (
                        <span className="absolute -bottom-3 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#e50914]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 divide-y divide-[#cccccc] border-b border-[#cccccc]">
                <div className="grid min-h-[70px] grid-cols-[220px_repeat(4,1fr)] items-center">
                  <p className="pr-4 text-sm text-[#737373]">
                    Monthly price
                  </p>

                  {plans.map((plan) => (
                    <p
                      key={plan.id}
                      className={`text-center text-sm font-semibold ${
                        selectedPlan === plan.id
                          ? "text-[#e50914]"
                          : "text-[#737373]"
                      }`}
                    >
                      {plan.price}
                    </p>
                  ))}
                </div>

                <div className="grid min-h-[70px] grid-cols-[220px_repeat(4,1fr)] items-center">
                  <p className="pr-4 text-sm text-[#737373]">
                    Video quality
                  </p>

                  {plans.map((plan) => (
                    <p
                      key={plan.id}
                      className={`text-center text-sm font-semibold ${
                        selectedPlan === plan.id
                          ? "text-[#e50914]"
                          : "text-[#737373]"
                      }`}
                    >
                      {plan.quality}
                    </p>
                  ))}
                </div>

                <div className="grid min-h-[70px] grid-cols-[220px_repeat(4,1fr)] items-center">
                  <p className="pr-4 text-sm text-[#737373]">
                    Resolution
                  </p>

                  {plans.map((plan) => (
                    <p
                      key={plan.id}
                      className={`text-center text-sm font-semibold ${
                        selectedPlan === plan.id
                          ? "text-[#e50914]"
                          : "text-[#737373]"
                      }`}
                    >
                      {plan.resolution}
                    </p>
                  ))}
                </div>

                <div className="grid min-h-[90px] grid-cols-[220px_repeat(4,1fr)] items-center">
                  <p className="pr-4 text-sm text-[#737373]">
                    Devices you can use to watch
                  </p>

                  {plans.map((plan) => (
                    <p
                      key={plan.id}
                      className={`px-3 text-center text-sm font-semibold ${
                        selectedPlan === plan.id
                          ? "text-[#e50914]"
                          : "text-[#737373]"
                      }`}
                    >
                      {plan.devices}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[820px] text-xs leading-relaxed text-[#737373]">
            This is a frontend-only demo. No payment will be charged, and the
            selected plan is not stored in a database.
          </p>

          <button
            type="button"
            onClick={handleNext}
            className="mx-auto mt-8 block h-16 w-full max-w-[440px] rounded bg-[#e50914] text-xl font-semibold text-white transition-colors duration-200 hover:bg-[#f6121d]"
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