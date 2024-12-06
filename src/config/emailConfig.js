import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true, // true para 465, false para outros
  auth: {
    user: "financeiro@criatools.com.br", // Usuário do SMTP
    pass: "ADcriatol24*", // Senha do SMTP
  },
});

export default transporter;
