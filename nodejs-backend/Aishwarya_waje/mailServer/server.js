import nodemailer from 'nodemailer';
import cron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //type: "OAuth2",
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const email = [
  'Hello sir...',
  "Hope you're having a productive day!",
  "You're doing great",
  "Please ignore if you're busy!",
  "Hello again..It's last mail",
];

let i = 0;
const sendMail = async () => {
  const text = email[i];
  const info = await transporter.sendMail({
    from: process.env.from,
    to: process.env.to,
    subject: '[checking]',
    text: text,
  });

  i++;
  console.log('Message sent:', info.messageId);
};

//sendMail();

cron.schedule('* * * * *', () => {
  if (i >= email.length) {
    process.exit();
  }

  console.log('running');
  sendMail();
});
