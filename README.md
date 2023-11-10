# Envio de E-mail com NodeJS utilizando Nodemailer

A aplicação realiza o envio de e-mails via SMTP do Hotmail/Outlook para um único usuário ou diversos.

## Pré-requisitos

- Conta criada no Hotmail/Outlook: [https://signup.live.com/](https://signup.live.com/)
- Node na versão 18.18.2: [https://nodejs.org/](https://nodejs.org/)
- Instale o Nodemailer usando: `npm install nodemailer` ([https://nodemailer.com/](https://nodemailer.com/))

## Como Usar

Insira suas credenciais de acesso de acordo com o `.env.example` e, em seguida, altere os dados do e-mail.

- **From:** Insira o nome que você deseja que seja exibido para o destinatário e, em seguida, seu e-mail dentro de sinais de maior e menor `< >` no formato de string.
- **To:** Insira o e-mail do destinatário.
- **Subject:** Aqui vai o assunto do seu e-mail.

Você pode inserir uma personalização do seu e-mail utilizando HTML e CSS de sua preferência.

É interessante um texto alternativo. Você pode inserir um link de redirecionamento ou um texto do seu e-mail em si, sem estilização.
