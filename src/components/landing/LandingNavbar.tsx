// import Link from "next/link";
// import Image from "next/image";


// export default function LandingNavbar() {
//   return (
// <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
// <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-5 sm:px-8 lg:px-10">        
// <Link href="/" aria-label="Netflix">
//   <Image
//     src="/images/netflix-logo.png"
//     alt="Netflix"
//     width={140}
//     height={40}
//     priority
//     className="h-auto w-[110px] sm:w-[140px]"
//   />
// </Link>

//         <div className="flex items-center gap-3">
//           <select
//             aria-label="Select language"
//             defaultValue="English"
//             className="hidden rounded border border-white/60 bg-black/50 px-3 py-1.5 text-sm text-white outline-none backdrop-blur-sm focus:border-white sm:block"
//           >
//             <option value="English">English</option>
//             <option value="Urdu">Urdu</option>
//           </select>

//           <Link
//             href="/signin"
//             className="rounded bg-[#e50914] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c11119]"
//           >
//             Sign In
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }
import Image from "next/image";
import Link from "next/link";

export default function LandingNavbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Netflix home">
          <Image
            src="/images/netflix-logo.png"
            alt="Netflix"
            width={140}
            height={40}
            priority
            className="h-auto w-[105px] sm:w-[130px]"
          />
        </Link>

        <div className="flex items-center gap-3">
          <select
            aria-label="Select language"
            defaultValue="English"
            className="hidden rounded border border-white/50 bg-black/40 px-3 py-1.5 text-sm text-white outline-none backdrop-blur-sm sm:block"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </select>

          <Link
            href="/signin"
            className="rounded bg-[#e50914] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#c11119]"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}