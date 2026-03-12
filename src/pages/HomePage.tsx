import Button from "../components/Button";
import LinkedinIcon from "../components/LinkedinIcon";
import InatagramIcon from "../components/InstagramIcon";
import GithubIcon from "../components/GithubIcon";

const HomePage = () => {
  return (
    <div>
      <section id="home" className="pt-50 pb-32 mx-auto text-center w-full">
        <div className="px-5">
          <h1 className="text-indigo-300 md:text-lg">Halo Semua👋</h1>
          <h2 className="text-slate-300 text-3xl mt-2 font-bold md:text-4xl lg:text-7xl">
            Saya Irfan Aqila Utama
          </h2>
          <h3 className="text-slate-400 text-lg md:text-xl mt-2 lg:text-2xl">
            Front End Developer
          </h3>
          <p className="text-slate-400 mt-3 lg:text-lg">
            Kode rapi, desain kece, tidur tetap berantakan. 😆
          </p>
          <div>
            <Button />
          </div>

          <div className="flex items-center justify-center gap-4">
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
      </section>
    </div>
  );
};
export default HomePage;
