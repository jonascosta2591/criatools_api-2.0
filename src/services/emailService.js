import transporter from "../config/emailConfig.js";
import fs from "fs";
import path from "path";

async function sendEmail({ to, subject, templateName, context }) {
  try {
    // Carregar template
    const templatePath = path.join("./src/templates", templateName);
    let html = fs.readFileSync(templatePath, "utf-8");

    // Substituir variáveis no template
    if (context) {
      Object.keys(context).forEach((key) => {
        html = html.replace(new RegExp(`{{${key}}}`, "g"), context[key]);
      });
    }

    // Configurar email
    const mailOptions = {
      from: '"Meu App" <financeiro@criatools.com.br>', // Remetente
      to,
      subject,
      html,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);
    console.log(`Email enviado para: ${to}`);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
}

export default sendEmail;
