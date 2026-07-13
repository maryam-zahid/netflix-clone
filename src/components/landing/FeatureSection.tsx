// import Image from "next/image";

// type FeatureSectionProps = {
//   title: string;
//   description: string;
//   image?: string;
//   imageAlt?: string;
//   video?: string;
//   reverse?: boolean;
// };

// export default function FeatureSection({
//   title,
//   description,
//   image,
//   imageAlt,
//   video,
//   reverse = false,
// }: FeatureSectionProps) {
//   return (
//     <section className="border-b-8 border-[#232323] bg-black px-6 py-16 text-white sm:px-10 md:py-20 lg:px-12">
//       <div
//         className={`mx-auto flex w-full max-w-[1200px] items-center gap-10 lg:gap-16 ${
//           reverse
//             ? "flex-col lg:flex-row-reverse"
//             : "flex-col lg:flex-row"
//         }`}
//       >
//         <div className="w-full text-center lg:w-1/2 lg:text-left">
//           <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
//             {title}
//           </h2>

//           <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed sm:text-xl lg:mx-0 lg:text-2xl">
//             {description}
//           </p>
//         </div>

//         <div className="w-full max-w-[600px] lg:w-1/2">
//           {video ? (
//             <div className="overflow-hidden rounded-xl border border-white/15 bg-[#181818] shadow-2xl">
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//                 className="aspect-video w-full object-cover"
//               >
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support video playback.
//               </video>
//             </div>
//           ) : image ? (
//             <Image
//               src={image}
//               alt={imageAlt || title}
//               width={600}
//               height={450}
//               className="h-auto w-full object-contain"
//             />
//           ) : null}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

type FeatureSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function FeatureSection({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="border-b-8 border-[#232323] bg-black px-4 py-12 text-white sm:px-6 md:py-16 lg:px-8">
      <div
        className={`mx-auto flex w-full max-w-[1200px] items-center gap-8 lg:gap-12 ${
          reverse
            ? "flex-col lg:flex-row-reverse"
            : "flex-col lg:flex-row"
        }`}
      >
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-lg leading-relaxed sm:text-xl lg:mx-0">
            {description}
          </p>
        </div>

        <div className="w-full max-w-[520px] lg:w-1/2">
          <Image
            src={image}
            alt={imageAlt}
            width={640}
            height={480}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}