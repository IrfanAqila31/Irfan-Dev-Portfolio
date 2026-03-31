// import Button from "../components/Button"; // Diubah untuk dua tombol langsung di bawah
import LinkedinIcon from "../components/LinkedinIcon";
import InatagramIcon from "../components/InstagramIcon";
import GithubIcon from "../components/GithubIcon";
import TechMarquee from "../components/TechMarquee";
import { TypeAnimation } from "react-type-animation";
import { MessageCircle, Download } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full">
      <section
        id="home"
        className="relative pt-50 pb-32 mx-auto text-center w-full"
      >
        <div className="px-5">
          <h1 className="text-indigo-300 md:text-lg animate-bounce" data-aos="fade-down">
            Halo Semua👋
          </h1>
          <h2 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-2 text-3xl mt-1 font-bold md:text-4xl lg:text-7xl" data-aos="zoom-in" data-aos-delay="100">
            Saya Irfan Aqila Utama
          </h2>
          {/* Typing Animation */}
          <h3 className="text-slate-400 text-lg md:text-xl mt-2 lg:text-2xl" data-aos="fade-up" data-aos-delay="200">
            <TypeAnimation
              sequence={[
                "Junior Front End Developer",
                2000,
                "Fresh Graduate",
                2000,
                "Always Learning",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </h3>
          <p className="text-slate-400 mt-3 lg:text-lg mb-8" data-aos="fade-up" data-aos-delay="300">
            Membangun antarmuka web modern dengan kode yang bersih dan performa optimal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="400">
            {/* Tombol Hubungi Saya */}
            <a
              href="#contact"
              className="w-full sm:w-auto bg-linear-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 px-8 py-3 rounded-full text-white transition font-medium duration-300 lg:text-md shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Hubungi Saya
            </a>
            
            {/* Tombol Download CV */}
            {/* Pastikan file CV Anda ditaruh di folder /public dengan nama yang sesuai */}
            <a
              href="/CV IRFAN AQILA UTAMA.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="w-full sm:w-auto px-8 py-3 rounded-full text-slate-300 border border-slate-600 hover:border-indigo-400 hover:text-indigo-300 hover:bg-slate-800/60 transition font-medium duration-300 lg:text-md flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-2" data-aos="zoom-in" data-aos-delay="500">
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
