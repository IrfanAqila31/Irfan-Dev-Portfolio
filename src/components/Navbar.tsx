import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center pt-2 px-4 z-30 transition-all duration-300">
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
              <a href="#home">Beranda</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#about">Tentang Saya</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#services">Layanan</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#project">Proyek</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#faq">FAQ</a>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer text-sm xl:text-base">
              <a href="#contact">Kontak</a>
            </li>
          </ul>

          {/* Mobile Button */}
          <div className="flex items-center gap-3">
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
        className={`absolute top-20 left-0 w-full flex justify-center px-4 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "-translate-y-4 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-6xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/50 text-slate-200 shadow-2xl shadow-indigo-500/10 rounded-3xl py-6 flex flex-col items-center gap-6 font-medium">
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Beranda
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#about" onClick={() => setIsOpen(false)}>
              Tentang Saya
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#services" onClick={() => setIsOpen(false)}>
              Layanan
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#project" onClick={() => setIsOpen(false)}>
              Proyek
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Kontak
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
