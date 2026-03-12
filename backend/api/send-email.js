// api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

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
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email berhasil dikirim" });
  } catch (error) {
    console.error("ERROR SERVER:", error);
    res.status(500).json({ message: "Gagal mengirim email" });
  }
}
