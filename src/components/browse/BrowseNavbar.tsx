"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navigationLinks = [
  {
    label: "Home",
    href: "/browse",
  },
  {
    label: "TV Shows",
    href: "/tv-shows",
  },
  {
    label: "Movies",
    href: "/movies",
  },
  {
    label: "New & Popular",
    href: "/new-popular",
  },
  {
    label: "My List",
    href: "/my-list",
  },
];

export default function BrowseNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        hasScrolled
          ? "bg-[#141414]"
          : "bg-gradient-to-b from-black/90 via-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex min-h-[68px] w-full items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left Side */}
        <div className="flex items-center gap-8">
          <Link
            href="/browse"
            className="text-3xl font-black uppercase tracking-[-2px] text-[#e50914]"
          >
            Netflix
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#e5e5e5] transition-colors duration-200 hover:text-[#b3b3b3]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-white transition hover:text-[#b3b3b3]"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="hidden text-white transition hover:text-[#b3b3b3] sm:block"
          >
            <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            type="button"
            className="group flex items-center gap-2"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded">
              <Image
                src="/images/profiles/maryam.png"
                alt="Profile"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>

            <ChevronDown className="hidden h-4 w-4 text-white transition-transform duration-200 group-hover:rotate-180 sm:block" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#141414] px-5 py-4 lg:hidden">
          <div className="flex flex-col">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm text-[#e5e5e5] transition-colors hover:text-white last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}