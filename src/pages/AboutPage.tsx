import React from "react";
import ProfileCard from "../components/ProfileCard";
import avatar from "../assets/saya.png";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TechStackGrid from "../components/TechStackGrid";
import Timeline from "../components/Timeline";
import CertificateGallery from "../components/CertificateGallery";
import { Lightbulb, Gamepad2, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

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
            <div
              className="max-w-xl mx-auto text-center mb-16"
              data-aos="fade-up"
            >
              <h4 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-1 font-bold md:text-3xl text-2xl lg:text-4xl mb-3 inline-block">
                {t("about.title")}
              </h4>
              <h2 className="text-slate-300 text-sm md:text-xl">
                {t("about.subtitle")}
              </h2>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div
              className="w-full px-5 md:w-1/2 flex justify-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <ProfileCard
                name="Irfan Aqila Utama"
                title={t("about.profileTitle")}
                handle="irfanAqila31"
                status="Online"
                contactText={t("about.contactText")}
                avatarUrl={avatar}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
            <div className="w-full px-5 md:w-1/2 flex flex-col gap-6 mt-10 md:mt-0 xl:max-w-xl">
              {/* Card 1: Utama (Perjalanan & Posisi) */}
              <div data-aos="fade-left" data-aos-delay="200">
                <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden h-full">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                  <h3 className="text-base lg:text-lg font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-indigo-400" /> {t("about.journeyTitle")}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {t("about.journeyDesc")}
                  </p>
                </div>
              </div>

              {/* Grid Baris 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Card 2: Gamer (Hobby) */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col justify-center h-full">
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>
                    <h3 className="text-base lg:text-lg  font-semibold text-slate-100 mb-2 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-purple-400" /> {t("about.gamerTitle")}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t("about.gamerDesc")}
                    </p>
                  </div>
                </div>

                {/* Card 3: Lokasi / Fast Facts */}
                <div data-aos="fade-up" data-aos-delay="400">
                  <div className="p-6 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col justify-center h-full">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                    <h3 className="text-base lg:text-lg font-semibold text-slate-100 mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-400" /> {t("about.locationTitle")}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {t("about.locationDesc")} <br />
                      <span className="font-normal opacity-80">
                        {t("about.locationSub")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: GitHub Contributions */}
              <div data-aos="fade-up" data-aos-delay="500">
                <div className="p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-md hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[100px] pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500"></div>
                  <h3 className="text-slate-100 font-semibold mb-5 flex items-center gap-2 relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t("about.githubTitle")}
                  </h3>

                  {/* Pembungkus khusus kalender */}
                  <div className="w-full relative z-10 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-slate-800/40 [&::-webkit-scrollbar-thumb]:bg-slate-700/80 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-600/90">
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
                            "data-tooltip-html": `${activity.count} ${t("about.githubTooltip")} ${formatReadableDate(activity.date)}`,
                          })
                        }
                      />
                      <Tooltip
                        id="react-tooltip"
                        style={{
                          fontSize: "11px",
                          padding: "4px 8px",
                          borderRadius: "6px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid Section */}
        <div className="container mx-auto">
          <div className="px-5 mt-16 max-w-6xl mx-auto" data-aos="fade-up">
            <TechStackGrid />
          </div>
        </div>

        {/* Experience & Education Timeline Section */}
        <div className="container mx-auto">
          <div className="px-5 max-w-4xl mx-auto" data-aos="fade-up">
            <Timeline />
          </div>
        </div>

        {/* Achievements & Certificates Section */}
        <div className="container mx-auto">
          <div className="px-5">
            <CertificateGallery />
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};
export default AboutPage;
