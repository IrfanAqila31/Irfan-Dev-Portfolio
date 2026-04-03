import { useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // cegah double submit
    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const formData = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    };

    try {
      await fetch(
        "https://portfolio-backend-nine-henna.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      alert("Pesan berhasil dikirim");
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section id="contact" className="pt-26 bg-transparent">
        <div className="container mx-auto">
          <div className="w-full px-5">
            <div
              className="max-w-xl mx-auto text-center mb-16"
              data-aos="fade-up"
            >
              <div>
                <h4 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-1 font-bold text-2xl md:text-3xl lg:text-4xl mb-3 inline-block">
                  Contact
                </h4>
              </div>
              <div>
                <p className="font-medium text-sm md:text-lg text-slate-400">
                  Jangan cuma liatin aja, hubungi saya dong! Siapa tahu obrolan
                  santai kita berujung jadi website kece😎.
                </p>
              </div>
            </div>
          </div>

          <form
            id="form-email"
            onSubmit={sendEmail}
            className="relative z-10 w-full lg:w-1/2 lg:mx-auto mb-20 px-5 lg:px-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="p-8 md:p-10 rounded-4xl bg-slate-900/40 border border-slate-700/50 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              {/* Subtle ambient light inside the form */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

              <div className="relative z-10">
                {/* Nama */}
                <div className="w-full mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan Nama Anda"
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-300 shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="w-full mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan Email Anda"
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-300 shadow-inner"
                  />
                </div>

                {/* Pesan */}
                <div className="w-full mb-8">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Masukkan Pesan Anda"
                    required
                    className="w-full p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all duration-300 h-36 resize-none shadow-inner"
                  ></textarea>
                </div>

                {/* Button */}
                <div className="w-full pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group/btn relative overflow-hidden w-full bg-linear-to-r from-indigo-500 to-indigo-600 px-8 py-4 rounded-xl text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:border-indigo-400 border border-indigo-500/50 transition-all duration-300
                    ${loading ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"}`}
                  >
                    <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover/btn:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out"></div>
                    <span className="relative flex justify-center items-center gap-2">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        "Kirim Pesan"
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
