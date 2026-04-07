import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import PersonalWeb from "../assets/demo/personal-web.webp";
import LuminaAI from "../assets/demo/lumina-ai.webp";
import SaaS from "../assets/demo/Saas.webp";
import BelanjaPintar from "../assets/demo/belanja-pintar.webp";
import { ChevronDown } from "lucide-react";
import DompetKu from "../assets/demo/dompetku.webp";
import { useLanguage } from "../context/LanguageContext";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  longDescription?: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const { t } = useLanguage();
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
    {
      image: PersonalWeb,
      title: t("project.items")[0]?.title || "Personal Portfolio",
      subtitle: t("project.items")[0]?.subtitle || "",
      longDescription: t("project.items")[0]?.longDescription || "",
      handle: "",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://sahnanarc.github.io/Portofolio_Arc_One_Studio/",
    },
    {
      image: SaaS,
      title: t("project.items")[1]?.title || "SaaS Landing Page",
      subtitle: t("project.items")[1]?.subtitle || "",
      longDescription: t("project.items")[1]?.longDescription || "",
      handle: "",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://sass-landing-page-wine.vercel.app/",
    },
    {
      image: LuminaAI,
      title: t("project.items")[2]?.title || "Lumina AI",
      subtitle: t("project.items")[2]?.subtitle || "",
      longDescription: t("project.items")[2]?.longDescription || "",
      handle: "",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://ai-assistant-eight-taupe.vercel.app/",
    },
    {
      image: BelanjaPintar,
      title: t("project.items")[3]?.title || "Belanja Pintar",
      subtitle: t("project.items")[3]?.subtitle || "",
      longDescription: t("project.items")[3]?.longDescription || "",
      handle: "",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://belanja-pintar-chi.vercel.app/",
    },
    {
      image: DompetKu,
      title: t("project.items")[4]?.title || "DompetKu",
      subtitle: t("project.items")[4]?.subtitle || "",
      longDescription: t("project.items")[4]?.longDescription || "",
      handle: "",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://dompetku-henna.vercel.app/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-7 mx-auto ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <ProjectCard key={i} item={c} />
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          display: "none",
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-250 z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
          display: "none",
        }}
      />
    </div>
  );
};

const ProjectCard: React.FC<{ item: ChromaItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      onMouseMove={handleCardMove}
      onClick={() => handleCardClick(item.url)}
      className="group relative flex flex-col w-[280px] rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20"
      style={
        {
          "--card-border": item.borderColor || "transparent",
          background: item.gradient,
          "--spotlight-color": "rgba(255,255,255,0.15)",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full p-4 pb-0 box-border">
        {/* Browser / Device Mockup */}
        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950/50 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500">
          {/* Browser Header */}
          <div className="flex items-center px-3 py-2 bg-white/5 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500/40"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500/40"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div>
            </div>
          </div>
          {/* Image Frame */}
          <div className="relative w-full aspect-4/3 bg-slate-900">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[center_45%] opacity-80 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
      <footer className="relative z-10 p-5 text-white font-sans flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <h3 className="m-0 text-lg font-bold tracking-tight text-white/90">
              {item.title}
            </h3>
            {item.handle && (
              <span className="text-xs font-medium text-indigo-400">
                {item.handle}
              </span>
            )}
          </div>
          {item.longDescription && (
            <button
              onClick={toggleExpand}
              className={`p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-4 h-4 text-white/70" />
            </button>
          )}
        </div>

        <p className="m-0 text-[0.875rem] leading-relaxed text-white/60 font-medium">
          {item.subtitle}
        </p>

        {/* Expandable Long Description */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-3 border-t border-white/5">
              <p className="text-[0.825rem] leading-relaxed text-white/50 italic">
                {item.longDescription}
              </p>
            </div>
          </div>
        </div>

        {item.location && (
          <span className="text-xs font-medium text-white/40 mt-1">
            {item.location}
          </span>
        )}
      </footer>
    </article>
  );
};

export default ChromaGrid;
