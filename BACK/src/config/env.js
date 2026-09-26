import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS?.replace(/\s+/g, ""),
  resendApiKey: process.env.RESEND_API_KEY,
  corsOrigins: process.env.CORS_ORIGIN?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
};
