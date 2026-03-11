const Footer = () => {
  return (
    <>
      <footer className="pt-26 pb-12 border-t border-slate-800">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-5 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-slate-300">
                Irfan Aqila Utama
              </h2>
              <h3 className=" font-bold text-2xl mb-2">Hubungi Saya</h3>
              <p className="text-slate-300">irfanaqila31@gmail.com</p>
            </div>
            <div className="w-full px-5 mb-12 md:w-1/3">
              <h3 className="font-bold text-xl text-slate-300 mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-indigo-400 mb-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-indigo-400 mb-3"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-indigo-400 mb-3"
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="inline-block text-base hover:text-indigo-400 mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700 text-center">
            <p className=" text-slate-500 font-medium text-xs">
              <a href="https://www.linkedin.com/in/irfan-aqila-utama-6297a52a8" target="_blank" className="font-bold text-indigo-400">
                Irfan Aqila Utama
              </a>
              <span> </span>| 2025
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
