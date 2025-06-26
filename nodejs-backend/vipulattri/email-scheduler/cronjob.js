const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Auto Bot 🤖" <${process.env.EMAIL_USER}>`,
    to: process.env.TO_EMAIL,
    subject: subject,
    text: `${message}\n\nFrom Vipul 🧑‍💻`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ ${subject} email sent`);
  } catch (error) {
    console.error(`❌ Error sending ${subject} email:`, error);
  }
};

module.exports = function startCronJobs() {
  // Good Morning - after 0s
  cron.schedule('*/20 * * * * *', () => {
    sendEmail("🌅 Good Morning", "Good Morning! ☀️ Hope you have a great day ahead!");
  });

  // Good Afternoon - after 5s
  setTimeout(() => {
    cron.schedule('*/20 * * * * *', () => {
      sendEmail("🌞 Good Afternoon", "Good Afternoon! 😎 Keep going strong!");
    });
  }, 5000);

  // Good Evening - after 10s
  setTimeout(() => {
    cron.schedule('*/20 * * * * *', () => {
      sendEmail("🌇 Good Evening", "Good Evening! 🌆 Hope your day was amazing!");
    });
  }, 10000);

  // Good Night - after 15s
  setTimeout(() => {
    cron.schedule('*/20 * * * * *', () => {
      sendEmail("🌙 Good Night", "Good Night! 😴 Sweet dreams and restful sleep!");
    });
  }, 15000);

  console.log("⏰ Scheduled all jobs to run every 20s with 5s gap");
};
