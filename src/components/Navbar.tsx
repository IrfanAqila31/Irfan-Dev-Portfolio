import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center pt-2 px-4">
      <div className="w-full max-w-5xl bg-gradient-to-r from-indigo-900 via-indigo-600 to-indigo-900 shadow-lg rounded-full px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-lg font-semibold text-slate-100">
          Irfan Aqila Utama
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-300">
          <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">About Me</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">Project</li>
          <li className="hover:text-white transition duration-300 cursor-pointer">Kontak</li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 w-full max-w-5xl px-4 md:hidden">
          <div className="bg-white shadow-lg rounded-3xl py-6 flex flex-col items-center gap-6 font-medium">
            <span className="hover:text-blue-500 cursor-pointer">Home</span>
            <span className="hover:text-blue-500 cursor-pointer">About Me</span>
            <span className="hover:text-blue-500 cursor-pointer">Project</span>
            <span className="hover:text-blue-500 cursor-pointer">Kontak</span>
          </div>
        </div>
      )}
    </nav>
  );
}