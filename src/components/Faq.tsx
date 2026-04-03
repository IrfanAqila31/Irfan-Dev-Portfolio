import { useState } from "react";

const faqs = [
  {
    question: "Apakah Anda menerima tawaran freelance?",
    answer:
      "Ya, saya sangat terbuka untuk proyek freelance, baik itu membangun website baru dari nol atau mengembangkan fitur baru pada website yang sudah ada.",
  },
  {
    question: "Apa tech stack utama yang Anda gunakan?",
    answer:
      "Fokus utama saya saat ini adalah React.js Ecosystem, termasuk Tailwind CSS untuk styling dan Git untuk version control. Saya selalu haus akan teknologi baru seperti Next.js atau TypeScript.",
  },
  {
    question: "Berapa lama waktu pembuatan website?",
    answer:
      "Tergantung pada kompleksitasnya. Untuk Landing Page sederhana biasanya memakan waktu 3-7 hari, sementara website modular yang lebih kompleks bisa 2-4 minggu.",
  },
  {
    question: "Bagaimana cara mulai berkolaborasi?",
    answer:
      "Anda cukup mengisi form pada bagian contact atau langsung menghubungi saya melalui Email/WhatsApp. Kita bisa mulai dengan obrolan ringan tentang kebutuhan Anda.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="pt-20 pb-32 bg-transparent">
      <div className="container mx-auto px-5 max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent pb-1 font-bold text-2xl md:text-3xl lg:text-4xl mb-3 inline-block">
            Frequently Asked Questions
          </h4>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === idx
                    ? "bg-slate-800/60 border-indigo-500/50 shadow-2xl"
                    : "bg-slate-900/40 border-slate-700/50 hover:border-indigo-500/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 group"
                >
                  <span
                    className={`font-semibold md:text-lg transition-colors duration-300 ${
                      activeIndex === idx ? "text-indigo-400" : "text-slate-100"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                      activeIndex === idx
                        ? "bg-indigo-500 border-indigo-500 rotate-180"
                        : "border-slate-700 group-hover:border-indigo-500"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={
                        activeIndex === idx ? "text-white" : "text-indigo-500"
                      }
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === idx
                      ? "max-h-96 opacity-100 py-6"
                      : "max-h-0 opacity-0 py-0"
                  } px-6 border-t border-slate-700/30 text-slate-400 leading-relaxed text-sm md:text-base`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;