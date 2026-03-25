
const icons = [
  { name: 'HTML5', url: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', url: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma/F24E1E' },
];

const TechMarquee = () => {
  return (
    <div className="relative flex overflow-hidden w-full max-w-7xl mx-auto py-10 mt-12">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* Container dengan efek memudar di sisi kiri dan kanan*/}
      <div 
        className="flex w-full overflow-hidden" 
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        {/* Track yang meluncur dari kanan ke kiri */}
        <div className="flex animate-marquee min-w-max items-center">
          
          {/* Icon 1 */}
          <div className="flex gap-16 px-8 items-center">
            {icons.map((icon, index) => (
              <div key={`icon1-${index}`} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300">
                <img 
                  src={icon.url} 
                  alt={icon.name} 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                  title={icon.name}
                />
              </div>
            ))}
          </div>

          {/* Icon 2*/}
          <div className="flex gap-16 px-8 items-center" aria-hidden="true">
            {icons.map((icon, index) => (
              <div key={`icon2-${index}`} className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300">
                <img 
                  src={icon.url} 
                  alt={icon.name} 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
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
