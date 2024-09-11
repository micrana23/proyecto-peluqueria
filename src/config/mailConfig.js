// backend/config/mailConfig.js

import dotenv from 'dotenv';

dotenv.config();

const mailConfig = {
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export default mailConfig;
