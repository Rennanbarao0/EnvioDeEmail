import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transport
  .sendMail({
    from: "Desenvolvedor <baraodesenvolvedor@hotmail.com>",
    to: "rennanbezerradosantos@hotmail.com",
    subject: "Envio de e-mail via SMTP com Nodejs",
    html: "<h1>Envio de e-mail</h1> <p>Parágrafo do teste de envio de e-mail</p>",
    text: "Olá, Usuário do serviço de e-mail.",
  })
  .then(() => console.log("Email enviado com sucesso!"))
  .catch((error) => console.log("Não foi possível enviar o e-mail!", error));
