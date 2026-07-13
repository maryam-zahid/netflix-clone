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
import { usePathname } from "next/navigation";

const navigationLinks = [
  { label: "Home", href: "/browse" },
  { label: "TV Shows", href: "/tv-shows" },
  { label: "Movies", href: "/movies" },
  { label: "New & Popular", href: "/new-popular" },
  { label: "My List", href: "/my-list" },
];

export default function BrowseNavbar() {
  const pathname = usePathname();

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
      className={`fixed left-0 top-0 z-[80] w-full transition-colors duration-300 ${
        hasScrolled
          ? "bg-[#141414]"
          : "bg-gradient-to-b from-black/90 to-transparent"
      }`}
    >
       <nav className="flex h-14 w-full items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-10">
         <div className="flex items-center gap-5 lg:gap-7">
          <Link href="/browse" aria-label="Netflix home">
            <Image
              src="/images/netflix-logo.png"
              alt="Netflix"
              width={110}
              height={32}
              priority
              className="h-auto w-[82px] sm:w-[105px]"
            />
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-white"
                      : "text-[#e5e5e5] hover:text-[#b3b3b3]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((current) => !current)
            }
            aria-label="Toggle navigation"
            className="text-white lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/search"
            aria-label="Search"
            className="text-white hover:text-[#b3b3b3]"
          >
            <Search className="h-5 w-5" />
          </Link>

          <button
            type="button"
            aria-label="Notifications"
            className="hidden text-white hover:text-[#b3b3b3] sm:block"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Open profile menu"
            className="group flex items-center gap-1.5"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded">
              <Image
                src="/images/profiles/maryam.png"
                alt="Current profile"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>

            <ChevronDown className="hidden h-4 w-4 transition-transform group-hover:rotate-180 sm:block" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#141414] px-4 py-3 lg:hidden">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm text-[#e5e5e5] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}