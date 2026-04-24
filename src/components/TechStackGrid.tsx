import { CodeXml, Wrench } from "lucide-react";

const TechStackGrid = () => {
  return (
    <div className="w-full mt-10">
      <h3 className="text-xl font-bold bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mb-6 md:text-2xl inline-block">
        Keahlian
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* teknologi web */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          <h4 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
            <CodeXml className="w-5 h-5 text-indigo-400" /> Teknologi Web
          </h4>
          <div className="flex flex-wrap gap-3 relative z-10">
            {[
              "React",
              "React Router",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "Axios",
              "Zod",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/60 rounded-xl text-slate-300 text-sm font-medium border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* desain dan tools */}
        <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          <h4 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-400" /> Alat & Platform
          </h4>
          <div className="flex flex-wrap gap-3 relative z-10">
            {["Figma", "Vite", "GitHub", "Vercel"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-slate-800/60 rounded-xl text-slate-300 text-sm font-medium border border-slate-700 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackGrid;
