import React from "react";
import ProfileCard from "../components/ProfileCard";
import avatar from "../assets/saya.png";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const AboutPage = () => {
  const formatReadableDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <section id="about" className="pt-32 pb-26">
        <div className="container mx-auto">
          <div className="w-full px-5">
            <div className="max-w-xl mx-auto text-center mb-16 ">
              <h4 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-1 font-bold md:text-3xl text-2xl lg:text-4xl mb-3 inline-block">
                About Me
              </h4>
              <h2 className="text-slate-300 text-sm md:text-xl">
                Sedang Menyusun Code dan Mimpi Bersamaan
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full px-5 md:w-1/2 flex justify-center">
              <ProfileCard
                name="Irfan Aqila Utama"
                title="Junior Front End Developer"
                handle="irfanAqila31"
                status="Online"
                contactText="Contact Me"
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
            <div className="w-full px-5 md:w-1/2 ">
              <p className="mt-5 text-slate-300 text-sm md:text-base xl:max-w-xl">
                Saya sedang menempuh perjalanan menjadi Front-End Developer yang
                lebih mahir. Setiap hari saya belajar hal baru, mencoba berbagai
                gaya desain, dan bereksperimen dengan warna serta elemen UI.
                Semakin dalam saya memahami kode, semakin besar rasa penasaran
                saya untuk menciptakan tampilan website yang menarik, modern,
                dan mudah digunakan. Di luar dunia coding, saya adalah seorang
                gamer yang suka menjelajahi berbagai dunia virtual dan
                menghadapi tantangan baru. Bermain game membantu saya
                berimajinasi, berpikir kreatif, dan memahami pengalaman pengguna
                dari sudut pandang berbeda. Dari hobi ini, saya mendapat banyak
                inspirasi untuk membuat desain dan interaksi digital yang lebih
                hidup.
              </p>
              
              <div className="text-slate-100 mt-8 w-full xl:max-w-xl">
                <h3 className="text-indigo-400 font-semibold mb-5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Contributions
                </h3>
                
                {/* Pembungkus khusus agar hanya kalender yang bisa digeser di HP */}
                <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-slate-800/40 [&::-webkit-scrollbar-thumb]:bg-slate-800/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-800/90">
                  <div className="min-w-max pr-4">
                    <GitHubCalendar
                      username="IrfanAqila31"
                      colorScheme="dark"
                      blockSize={12}
                      blockMargin={4}
                      fontSize={12}
                      year={2026}
                      renderBlock={(block, activity) =>
                        React.cloneElement(block, {
                          "data-tooltip-id": "react-tooltip",
                          "data-tooltip-html": `${activity.count} kontribusi pada ${formatReadableDate(activity.date)}`,
                        })
                      }
                    />
                    <Tooltip 
                      id="react-tooltip" 
                      style={{ fontSize: '11px', padding: '4px 8px', borderRadius: '6px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};
export default AboutPage;
