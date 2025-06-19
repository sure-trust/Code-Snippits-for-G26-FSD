require('dotenv').config();
const express = require('express');
const startCronJobs = require('./cronjob');

const app = express();
const PORT = process.env.PORT || 8080;

startCronJobs();

app.get('/', (req, res) => {
  res.send('📩 Email Scheduler is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
