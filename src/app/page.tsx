// import FeatureSection from "@/components/landing/FeatureSection";
// import LandingHero from "@/components/landing/LandingHero";
// import LandingNavbar from "@/components/landing/LandingNavbar";
// import FAQSection from "@/components/landing/FAQSection";
// import LandingFooter from "@/components/landing/LandingFooter";
// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-black text-white">
//       <LandingNavbar />
//       <LandingHero />

//       <FeatureSection
//         title="Enjoy on your TV."
//         description="Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
//         video="/videos/tv-video.mp4"
//       />

//       <FeatureSection
//         title="Download your shows to watch offline."
//         description="Save your favourites easily and always have something to watch."
//         video="/videos/download-video.mp4"
//         reverse
//       />
//       <FeatureSection
//   title="Watch everywhere."
//   description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
//   video="/videos/watch-everywhere-video.mp4"
// />
// <FeatureSection
//   title="Create profiles for children."
//   description="Send children on adventures with their favourite characters in a space made just for them."
//   image="/images/landing/kids.png"
//   imageAlt="Kids Profile"
//   reverse
// />
// <FAQSection />
// <LandingFooter />
//     </main>
//   );
// }
import FAQSection from "@/components/landing/FAQSection";
import FeatureSection from "@/components/landing/FeatureSection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingHero from "@/components/landing/LandingHero";
import LandingNavbar from "@/components/landing/LandingNavbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <LandingNavbar />
      <LandingHero />

      <FeatureSection
        title="Enjoy on your TV."
        description="Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image="/images/landing/tv.png"
        imageAlt="Netflix on television"
      />

      <FeatureSection
        title="Download your shows to watch offline."
        description="Save your favourites easily and always have something to watch."
        image="/images/landing/mobile.png"
        imageAlt="Netflix mobile download"
        reverse
      />

      <FeatureSection
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
        image="/images/landing/device-pile.png"
        imageAlt="Netflix on multiple devices"
      />

      <FeatureSection
        title="Create profiles for children."
        description="Send children on adventures with their favourite characters in a space made just for them."
        image="/images/landing/kids.png"
        imageAlt="Netflix children profile"
        reverse
      />

      <FAQSection />
      <LandingFooter />
    </main>
  );
}