"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries and more.",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop or streaming device for a fixed monthly fee.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere and anytime on supported devices. You can also download shows to watch offline.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "There are no contracts or commitments. You can cancel your membership online at any time.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "You can watch movies, TV shows, documentaries, animation, family content and much more.",
  },
  {
    id: 6,
    question: "Is Netflix good for children?",
    answer:
      "Children can enjoy a dedicated profile with family-friendly content and parental controls.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className="border-b-8 border-[#232323] bg-black px-6 py-16 text-white sm:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[1000px]">
        <h2 className="mb-8 text-center text-3xl font-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article key={item.id}>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  className="flex w-full items-center justify-between bg-[#2d2d2d] px-5 py-6 text-left text-lg transition-colors duration-200 hover:bg-[#414141] sm:px-6 sm:text-2xl"
                >
                  <span>{item.question}</span>

                  <Plus
                    className={`h-7 w-7 shrink-0 transition-transform duration-300 sm:h-9 sm:w-9 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden bg-[#2d2d2d] transition-all duration-300 ${
                    isOpen
                      ? "mt-px grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 py-6 text-lg leading-relaxed sm:px-6 sm:text-2xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-[760px] text-center">
          <p className="text-base sm:text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <form className="mx-auto mt-5 flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded border border-white/60 bg-black/60 px-4 text-base text-white outline-none placeholder:text-[#b3b3b3] focus:border-white"
            />

            <button
              type="submit"
              className="h-14 rounded bg-[#e50914] px-7 text-lg font-bold text-white transition-colors duration-200 hover:bg-[#c11119] sm:text-xl"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}