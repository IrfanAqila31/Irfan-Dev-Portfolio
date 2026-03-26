import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center pt-2 px-4 fixed z-30">
      {/* Layar transparan (Overlay) untuk  menangkap klik di luar menu */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 md:hidden -z-10 ${
          isOpen ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="w-full max-w-5xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-indigo-500/10 rounded-full px-7 py-3 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="text-lg font-semibold text-slate-100">
          Irfan Aqila Utama
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-200">
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
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

      {/* Mobile Menu */}
      <div
        className={`absolute top-24 w-full max-w-5xl px-4 md:hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "-translate-y-6 scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 text-slate-200 shadow-2xl shadow-indigo-500/10 rounded-3xl py-6 flex flex-col items-center gap-6 font-medium">
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Me
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#project" onClick={() => setIsOpen(false)}>
              Project
            </a>
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
