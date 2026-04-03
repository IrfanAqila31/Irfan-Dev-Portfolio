import { Monitor, Palette, Zap } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Membangun antarmuka web yang responsif, cepat, dan interaktif menggunakan React.js dan Tailwind CSS.",
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "UI/UX Design Implementation",
    description: "Mengubah desain Figma menjadi kode yang presisi, dengan fokus pada pengalaman pengguna yang mulus.",
    icon: <Palette className="w-8 h-8 text-pink-400" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Performance Optimization",
    description: "Memastikan website memiliki performa terbaik, waktu muat cepat, dan SEO-friendly.",
    icon: <Zap className="w-8 h-8 text-amber-400" />,
    color: "from-amber-400 to-orange-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-26 pb-26 bg-transparent">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-1 font-bold text-2xl md:text-3xl lg:text-4xl mb-3 inline-block">
            What I Do
          </h4>
          <p className="font-medium text-sm md:text-lg text-slate-400 max-w-2xl mx-auto">
            Saya mengombinasikan kode yang rapi dengan desain yang estetik untuk menciptakan solusi digital terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div
                className="relative group p-8 rounded-4xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-xl hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${service.color} opacity-10 blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 flex justify-center md:justify-start">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700 transition-colors group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-4 text-center md:text-left">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left group-hover:text-slate-300 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-linear-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

