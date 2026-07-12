"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupForm() {
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
          required
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
          required
          minLength={6}
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
  );
}