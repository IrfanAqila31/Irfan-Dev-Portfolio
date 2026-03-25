import { useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();

    // cegah double submit
    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
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
            <div className="max-w-xl mx-auto text-center mb-16">
              <div>
                <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl text-indigo-500 mb-3">
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

          <form id="form-email" onSubmit={sendEmail}>
            <div className="w-full lg:w-1/2 lg:mx-auto">
              {/* Nama */}
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base text-secondary dark:text-slate-400 font-bold"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Masukkan Nama Anda"
                  required
                  className="w-full p-3 mt-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 shadow-md text-white border-2 border-indigo-500 bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base text-secondary dark:text-slate-400 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan Email Anda"
                  required
                  className="w-full p-3 mt-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 shadow-md text-white border-2 border-indigo-500 bg-transparent"
                />
              </div>

              {/* Pesan */}
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base text-secondary dark:text-slate-400 font-bold"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tulis Pesan Anda"
                  required
                  className="w-full p-3 mt-1 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1 focus:border-indigo-500 h-32 shadow-md text-white border-2 border-indigo-500 bg-transparent"
                ></textarea>
              </div>

              {/* Button */}
              <div className="w-full px-4 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-3 mb-20 bg-linear-to-r from-indigo-500 to-indigo-700 px-10 py-3 rounded-full text-white transition font-medium duration-300
                  ${loading ? "opacity-50 cursor-not-allowed " : "hover:opacity-90"}`}
                >
                  {loading ? "Loading..." : "Hubungi Saya"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
