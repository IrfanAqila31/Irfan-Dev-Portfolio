import { ExternalLink, Award, BookOpen } from "lucide-react";

// Import images
import aiSertif from "../assets/certificates/belajar-dasar-ai.png";
import bootstrapSertif from "../assets/certificates/belajar-bootstrap.png";
import cssSertif from "../assets/certificates/belajar-dasar-css.png";
import htmlSertif from "../assets/certificates/belajar-html.png";
import financeSertif from "../assets/certificates/financial-literasi.png";
import frontendSertif from "../assets/certificates/front-end-pemula.png";

const certificates = [
  {
    title: "Dasar-Dasar Kecerdasan Buatan (AI)",
    issuer: "Dicoding Indonesia",
    image: aiSertif,
    pdf: "/certificates/Sertifikat-Belajar-AI.pdf",
    category: "AI & Data",
  },
  {
    title: "Pengembangan Web Front-End (Tingkat Pemula)",
    issuer: "Dicoding Indonesia",
    image: frontendSertif,
    pdf: "/certificates/Sertifikat-FrontEnd.pdf",
    category: "Front-End",
  },
  {
    title: "Teknik Desain & Tata Letak Web (CSS)",
    issuer: "Codepolitan",
    image: cssSertif,
    pdf: "/certificates/Sertifikat-CSS.pdf",
    category: "Front-End",
  },
  {
    title: "Struktur Fondasi Web dengan HTML",
    issuer: "Codepolitan",
    image: htmlSertif,
    pdf: "/certificates/Sertifikat-HTML.pdf",
    category: "Front-End",
  },
  {
    title: "Desain Antarmuka Responsif (Bootstrap)",
    issuer: "Codepolitan",
    image: bootstrapSertif,
    pdf: "/certificates/Sertifikat-Bootstrap.pdf",
    category: "UI Framework",
  },
  {
    title: "Literasi Keuangan & Manajemen Sumber Daya",
    issuer: "Dicoding Indonesia",
    image: financeSertif,
    pdf: "/certificates/Sertifikat-Financial-Literacy.pdf",
    category: "Edukasi Umum",
  },
];

const CertificateGallery = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Award className="w-8 h-8 text-indigo-500" />
          Achievements & Certifications
        </h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Bukti dedikasi saya dalam mempelajari teknologi terbaru dan memperkuat
          fondasi pemrograman saya melalui kursus bersertifikasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group"
          >
            <div className="relative bg-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 h-full flex flex-col">
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-indigo-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View PDF
                  </a>
                </div>
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-indigo-400 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border border-indigo-500/30">
                  {cert.category}
                </span>
              </div>

              {/* Info Container */}
              <div className="p-5 grow flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="mt-1">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="text-slate-100 font-bold leading-snug group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs mt-auto">
                  Issued by{" "}
                  <span className="text-slate-300 font-medium">
                    {cert.issuer}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
