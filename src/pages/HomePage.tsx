
import LinkedinIcon from "../components/LinkedinIcon";
import InatagramIcon from "../components/InstagramIcon";
import GithubIcon from "../components/GithubIcon";
import TechMarquee from "../components/TechMarquee";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { MessageCircle, Download, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const HomePage = () => {
  const { t, language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      <section
        id="home"
        className="relative pt-50 pb-32 mx-auto text-center w-full"
      >
        <div className="px-5">
          <h1
            className="text-indigo-300 md:text-lg animate-bounce"
            data-aos="fade-down"
          >
            {t("home.greeting")}
          </h1>
          <h2
            className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-2 text-3xl mt-1 font-bold md:text-4xl lg:text-7xl"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {t("home.nameIntro")}
          </h2>
          {/* Typing Animation */}
          <h3
            className="text-slate-400 text-lg md:text-xl mt-2 lg:text-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <TypeAnimation
              key={language}
              sequence={[
                t("home.typeAnimation")[0],
                2000,
                t("home.typeAnimation")[1],
                2000,
                t("home.typeAnimation")[2],
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </h3>
          <p
            className="text-slate-400 mt-3 lg:text-lg mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("home.description")}
          </p>

          {/* CTA Buttons */}
          <div
            className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Tombol Hubungi Saya */}
            <a
              href="#contact"
              className="w-full sm:w-auto bg-linear-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 px-8 py-3 rounded-full text-white transition font-medium duration-300 lg:text-md shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> {t("home.contactBtn")}
            </a>

            {/* CV Download Group */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full sm:w-auto px-6 py-3 rounded-full text-slate-300 border transition font-medium duration-300 lg:text-md flex items-center justify-center gap-2 shadow-sm ${
                  isDropdownOpen 
                    ? "border-indigo-400 text-indigo-300 bg-slate-800/60" 
                    : "border-slate-600 hover:border-indigo-400 hover:text-indigo-300 hover:bg-slate-800/60"
                }`}
              >
                <Download className="w-5 h-5" /> {t("home.cvBtn")} <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu Wrapper */}
              <div className={`absolute left-0 top-full pt-2 w-full sm:w-56 transition-all duration-300 z-50 transform origin-top ${
                isDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-[-10px]"
              }`}>
                {/* Solid Background Card */}
                <div className="bg-slate-900 border border-slate-600 rounded-2xl shadow-2xl shadow-black overflow-hidden relative z-50">
                  <div className="flex flex-col py-2">
                    <a
                      href="/CV IRFAN AQILA UTAMA.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="px-5 py-3 text-sm md:text-base text-slate-100 hover:bg-slate-700 hover:text-indigo-300 transition-colors border-b border-slate-600 flex items-center justify-between"
                    >
                      {t("home.cvId")} <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400">ID</span>
                    </a>
                    <a
                      href="/CV IRFAN AQILA UTAMA (English).pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="px-5 py-3 text-sm md:text-base text-slate-100 hover:bg-slate-700 hover:text-indigo-300 transition-colors flex items-center justify-between"
                    >
                      {t("home.cvEn")} <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400">EN</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative z-20 flex items-center justify-center gap-4 mt-2"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            {/*LinkedIn */}

            <a
              href="https://www.linkedin.com/in/irfan-aqila-utama-6297a52a8"
              target="_blank"
              className="text-slate-300 h-9 w-9 rounded-full flex justify-center items-center border border-slate-500 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500"
            >
              <LinkedinIcon />
            </a>
            {/*Instagram */}
            <a
              href="https://www.instagram.com/___quinncyy?igsh=MXdwemVscDVxbnFxaA=="
              target="_blank"
              className=" text-slate-300 h-9 w-9 rounded-full flex justify-center items-center border border-slate-500 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500"
            >
              <InatagramIcon />
            </a>
            <a
              href="https://github.com/IrfanAqila31"
              target="_blank"
              className="text-slate-300 h-9 w-9 rounded-full flex justify-center items-center border border-slate-500 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-500"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        {/* Tech Stack Marquee Logo */}
        <TechMarquee />
      </section>
    </div>
  );
};
export default HomePage;
