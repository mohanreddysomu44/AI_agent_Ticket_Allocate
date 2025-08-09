import nodemailer from "nodemailer";

export const sendMail = async (toString, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_SMPT_HOST,
      port: MAILTRAP_SMPT_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: MAILTRAP_SMPT_USER,
        pass: MAILTRAP_SMPT_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Inngest TMS',
      to,
      subject,
      text,
      // html: "<b>Hello world?</b>", // HTML body
    });
    console.log("Message sent:", info.messageId);
    return info;
  } catch (error) {
    console.log("❌ Mail eror", error.message);
    throw error;
  }
};
