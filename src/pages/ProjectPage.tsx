import ChromaGrid from "../components/ChromaGrid";

const ProjectPage = () => {
  return (
    <>
      <section id="project" className="pt-30 pb-28">
        <div className="container mx-auto">
          <div className="w-full px-5">
            <div className="max-w-xl mx-auto text-center mb-16 ">
              <h4 className="text-indigo-300 font-semibold md:text-lg">
                Portfolio
              </h4>
              <p className="font-medium text-md md:text-lg text-slate-400">
                Walau masih belajar, saya berusaha membuat website yang menarik,
                cepat, dan mudah digunakan oleh semua pengguna di berbagai
                perangkat.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="w-full px-5">
              <ChromaGrid />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectPage;
