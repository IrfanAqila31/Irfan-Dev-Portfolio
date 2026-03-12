require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

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
    console.log("ERROR SERVER:", error);
    res.status(500).json({ message: "Gagal mengirim email" });
  }
});

// MENJALANKAN SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});
