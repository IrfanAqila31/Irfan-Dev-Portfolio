import ProfileCard from "../components/ProfileCard";
import avatar from "../assets/saya.png";
const AboutPage = () => {
  return (
    <>
      <section id="about" className="pt-30 pb-28">
        <div className="container mx-auto">
          <div className="w-full px-5">
            <div className="max-w-xl mx-auto text-center mb-16 ">
              <h4 className="text-indigo-500 font-bold md:text-3xl text-2xl lg:text-4xl mb-3">
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
                Semakin dalam saya memahami kode, semakin besar ras penasaran
                saya untuk menciptakan tampilan website yang menarik, modern,
                dan mudah digunakan. Di luar dunia coding, saya adalah seorang
                gamer yang suka menjelajahi berbagai dunia virtual dan
                menghadapi tantangan baru. Bermain game membantu saya
                berimajinasi, berpikir kreatif, dan memahami pengalaman pengguna
                dari sudut pandang berbeda. Dari hobi ini, saya mendapat banyak
                inspirasi untuk membuat desain dan interaksi digital yang lebih
                hidup.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div></div>
    </>
  );
};
export default AboutPage;
