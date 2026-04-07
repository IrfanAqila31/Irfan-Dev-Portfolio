import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="w-full flex justify-center pt-2 px-4 fixed z-30">
      {/* Layar transparan (Overlay) untuk  menangkap klik di luar menu */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 lg:hidden -z-10 ${
          isOpen
            ? "opacity-80 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="w-full max-w-6xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-indigo-500/10 rounded-full px-7 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="text-lg font-semibold text-slate-100">
          Irfan Aqila Utama
        </div>

        {/* Right Section: Menu & Actions */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 font-medium text-slate-200">
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#home">{t("nav.home")}</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#services">{t("nav.services")}</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#project">{t("nav.project")}</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#faq">{t("nav.faq")}</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#contact">{t("nav.contact")}</a>
            </li>
          </ul>

          {/* Action Area: Language Toggle & Mobile Button */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center px-3 py-1 text-xs font-semibold text-slate-300 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-600 transition-all duration-300 cursor-pointer hover:border-indigo-500"
              aria-label="Toggle Language"
            >
              {language.toUpperCase()}
            </button>

            {/* Mobile Button */}
            <div className="lg:hidden">
              <button
                className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "opacity-0 translate-x-3 scale-x-50" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 w-full max-w-5xl px-4 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "-translate-y-6 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 text-slate-200 shadow-2xl shadow-indigo-500/10 rounded-3xl py-6 flex flex-col items-center gap-6 font-medium">
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#home" onClick={() => setIsOpen(false)}>
              {t("nav.home")}
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#about" onClick={() => setIsOpen(false)}>
              {t("nav.about")}
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#services" onClick={() => setIsOpen(false)}>
              {t("nav.services")}
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#project" onClick={() => setIsOpen(false)}>
              {t("nav.project")}
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#faq" onClick={() => setIsOpen(false)}>
              {t("nav.faq")}
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              {t("nav.contact")}
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
