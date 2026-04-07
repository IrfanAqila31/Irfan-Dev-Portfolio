import { GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Timeline = () => {
  const { t } = useLanguage();

  const experiences = t("timeline.items") as {
    year: string;
    title: string;
    company: string;
    description: string;
  }[];

  // We map the type explicitly here to keep styling intact based on index
  const typedExperiences = experiences.map((item, index) => ({
    ...item,
    type: index === 0 ? "experience" : "education",
  }));

  return (
    <div className="w-full mt-16 mb-10">
      <h3 className="text-xl font-bold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-12 md:text-2xl text-center md:text-left inline-block">
        {t("timeline.title")}
      </h3>

      <div className="relative border-l-2 border-slate-700/50 pl-6 md:pl-8 ml-4 md:ml-0 space-y-12">
        {typedExperiences.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[29px] md:-left-[37px] top-1 w-4 h-4 rounded-full border-4 border-slate-950 ${item.type === "education" ? "bg-cyan-500" : "bg-indigo-500"} group-hover:scale-125 transition-transform duration-300 z-10`}
            ></div>

            {/* Timeline Glow Effect (Dot) */}
            <div
              className={`absolute -left-[41px] md:-left-[49px] -top-2 w-10 h-10 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${item.type === "education" ? "bg-cyan-500" : "bg-indigo-500"}`}
            ></div>

            {/* Content Card */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-slate-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
              {/* Background*/}
              <div
                className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${item.type === "education" ? "bg-cyan-500" : "bg-indigo-500"}`}
              ></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 md:mb-4 relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-slate-100 flex items-center gap-3">
                  {item.type === "education" ? (
                    // icon lucide react
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  )}
                  {item.title}
                </h4>
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700 mt-3 md:mt-0 inline-block w-fit shadow-md">
                  {item.year}
                </span>
              </div>
              <h5
                className={`text-base font-semibold mb-3 relative z-10 ${item.type === "education" ? "text-cyan-400" : "text-indigo-400"}`}
              >
                {item.company}
              </h5>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed relative z-10">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
