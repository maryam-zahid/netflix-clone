import Link from "next/link";

const footerColumns = [
  [
    "Audio and Subtitles",
    "Media Centre",
    "Privacy",
    "Contact Us",
  ],
  [
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
  ],
  [
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
  ],
  [
    "Gift Cards",
    "Terms of Use",
    "Corporate Information",
  ],
];

export default function BrowseFooter() {
  return (
    <footer className="bg-black px-5 py-10 text-[#808080] sm:px-8 lg:px-12">
      <div className="w-full">
        {/* Social icons */}
        <div className="flex items-center gap-5 text-white">
          <Link
            href="#"
            aria-label="Facebook"
            className="transition-colors hover:text-[#b3b3b3]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z" />
            </svg>
          </Link>

          <Link
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-[#b3b3b3]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.5 5.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
            </svg>
          </Link>

          <Link
            href="#"
            aria-label="Twitter"
            className="transition-colors hover:text-[#b3b3b3]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M21 6.5c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.8-2.5.9A3.8 3.8 0 0 0 11.4 9c0 .3 0 .6.1.9A10.8 10.8 0 0 1 3.7 6c-.4.6-.5 1.3-.5 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.1 3.8-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.7A7.7 7.7 0 0 1 3.5 19c-.3 0-.6 0-.9-.1A10.8 10.8 0 0 0 8.4 20c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.2 1.8-2.2Z" />
            </svg>
          </Link>

          <Link
            href="#"
            aria-label="YouTube"
            className="transition-colors hover:text-[#b3b3b3]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M22 7.5a3 3 0 0 0-2.1-2.1C18 5 12 5 12 5s-6 0-7.9.4A3 3 0 0 0 2 7.5 31 31 0 0 0 1.6 12 31 31 0 0 0 2 16.5a3 3 0 0 0 2.1 2.1C6 19 12 19 12 19s6 0 7.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-4.5 31 31 0 0 0-.4-4.5ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
            </svg>
          </Link>
        </div>

        {/* Footer links */}
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 text-xs sm:grid-cols-4">
          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="transition-colors hover:text-white hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 border border-[#808080] px-3 py-2 text-xs transition-colors hover:border-white hover:text-white"
        >
          Service Code
        </button>
      </div>
    </footer>
  );
}