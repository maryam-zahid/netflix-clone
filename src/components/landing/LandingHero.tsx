/*adding for sign up*/  
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function LandingHero() {
// adding data for sign up page
const router = useRouter();
const [email, setEmail] = useState("");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  router.push(`/signup?email=${encodeURIComponent(email)}`);
}
// added data for sign up page
  return (
    <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden border-b-8 border-[#232323] px-5 pb-16 pt-28 sm:min-h-[720px] sm:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/landing/hero-background.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black" /> */}
<div className="absolute inset-0 bg-black/10" />

<div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/60 to-transparent" />

<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent" /><div className="relative z-10 mx-auto max-w-[850px] text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="mt-5 text-lg font-medium sm:text-xl lg:text-2xl">
          Watch anywhere. Cancel anytime.
        </p>

        <p className="mx-auto mt-6 max-w-[650px] text-base leading-relaxed sm:text-lg">
          Ready to watch? Enter your email to create or restart your
          membership.
        </p>

        {/* <form className="mx-auto mt-5 flex w-full max-w-[650px] flex-col gap-3 sm:flex-row"> */}
        <form
  onSubmit={handleSubmit}
  className="mx-auto mt-5 flex w-full max-w-[650px] flex-col gap-3 sm:flex-row"
> 
{/* added data */}
 {/* <input
            type="email"
            placeholder="Email address"
            className="h-14 flex-1 rounded border border-white/60 bg-black/60 px-4 text-base text-white outline-none placeholder:text-[#b3b3b3] focus:border-white focus:ring-2 focus:ring-white/20"
          /> */}
          <input
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  placeholder="Email address"
  className="h-14 flex-1 rounded border border-white/60 bg-black/60 px-4 text-base text-white outline-none placeholder:text-[#b3b3b3] focus:border-white focus:ring-2 focus:ring-white/20"
/>

          <button
            type="submit"
            className="h-14 rounded bg-[#e50914] px-7 text-lg font-bold text-white transition-colors duration-200 hover:bg-[#c11119] sm:text-xl"
          >
            Get Started &gt;
          </button>
        </form>
      </div>
    </section>
  );
}