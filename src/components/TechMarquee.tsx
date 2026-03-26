import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import ts from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/Bootstrap.svg";
import figma from "../assets/figma.svg";

const icons = [
  { name: "HTML5", src: html },
  {
    name: "CSS3",
    src: css,
  },
  { name: "JavaScript", src: js },
  { name: "React", src: react },
  { name: "TypeScript", src: ts },
  {
    name: "Tailwind CSS",
    src: tailwind,
  },
  { name: "Bootstrap", src: bootstrap },
  { name: "Figma", src: figma },
];

const TechMarquee = () => {
  return (
    <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-10 flex overflow-hidden w-full max-w-7xl mx-auto py-10">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .animate-marquee:has(.marquee-item:hover) {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Container dengan efek memudar di sisi kiri dan kanan*/}
      <div
        className="flex w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Track yang meluncur dari kanan ke kiri */}
        <div className="flex animate-marquee min-w-max items-center">
          {/* Icon 1 */}
          <div className="flex flex-none gap-16 px-8 items-center">
            {[...icons, ...icons, ...icons, ...icons].map((icon, index) => (
              <div
                key={`icon1-${index}`}
                className="marquee-item flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="h-10 w-10 lg:h-13 lg:w-13 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  title={icon.name}
                />
              </div>
            ))}
          </div>

          {/* Icon 2*/}
          <div className="flex flex-none gap-16 px-8 items-center" aria-hidden="true">
            {[...icons, ...icons, ...icons, ...icons].map((icon, index) => (
              <div
                key={`icon2-${index}`}
                className="marquee-item flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="h-10 w-10 lg:h-13 lg:w-13 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  title={icon.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
