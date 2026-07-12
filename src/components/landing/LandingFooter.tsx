import Link from "next/link";

const footerLinks = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

export default function LandingFooter() {
  return (
    <footer className="bg-black px-6 py-16 text-[#b3b3b3] sm:px-10 lg:px-12">
      <div className="mx-auto w-full max-w-[1000px]">
        <p className="mb-8 text-base">
          Questions?{" "}
          <Link
            href="#"
            className="underline transition-colors duration-200 hover:text-white"
          >
            Contact us
          </Link>
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:grid-cols-3 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="underline transition-colors duration-200 hover:text-white"
            >
              {link}
            </Link>
          ))}
        </div>

        <select
          aria-label="Select language"
          defaultValue="English"
          className="mt-8 rounded border border-white/50 bg-black px-4 py-2 text-sm text-white outline-none focus:border-white"
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>

        <p className="mt-8 text-sm">Netflix Pakistan</p>

        <p className="mt-8 text-xs leading-relaxed text-[#737373]">
          This is a frontend-only Netflix clone created for educational
          purposes. It is not affiliated with Netflix.
        </p>
      </div>
    </footer>
  );
}