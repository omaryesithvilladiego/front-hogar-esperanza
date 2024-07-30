// server/nodemailerConfig.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Cambia a tu proveedor de correo
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_EMAIL_PASSWORD'
  }
});

const sendDonationReceipt = (to, amount, message) => {
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: to,
    subject: 'Gracias por tu donación',
    html: `
      <h1>Certificado de Donación</h1>
      <p>Estimado/a donante,</p>
      <p>Queremos agradecerte por tu generosa donación de <strong>$${amount}</strong>.</p>
      <p>${message}</p>
      <p>¡Gracias por apoyar nuestra causa!</p>
      <p>Saludos,</p>
      <p>El equipo de la Fundación</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendDonationReceipt;
