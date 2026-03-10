const logos = [
  "html5",
  "css3",
  "javascript",
  "react",
  "typescript",
  "figma",
  "tailwindcss",
  "bootstrap",
];

export default function TechStack() {
  const loopLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 rounded-2xl">
      <div className="flex gap-16 marquee">

        {loopLogos.map((logo, i) => (
          <img
            key={i}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo}/${logo}-original.svg`}
            className="w-14 h-14 grayscale brightness-150 opacity-80"
          />
        ))}

      </div>
    </div>
  );
}