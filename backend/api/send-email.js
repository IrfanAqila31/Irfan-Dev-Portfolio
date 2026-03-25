import Cors from "cors";
import initMiddleware from "./_init-middleware"; 

// initialize cors middleware
const cors = initMiddleware(
  Cors({
    origin: "https://irfan-dev-portfolio.vercel.app", // frontend domain
    methods: ["POST", "OPTIONS"],
  }),
);

export default async function handler(req, res) {
  // jalankan cors
  await cors(req, res);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Pesan dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email berhasil dikirim" });
  } catch (error) {
    console.error("ERROR SERVER:", error);
    res.status(500).json({ message: "Gagal mengirim email" });
  }
}
