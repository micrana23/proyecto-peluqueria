import { env } from "./env.js";

const mailConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  family: 4, // fuerza IPv4, evita el timeout típico de Render con IPv6
  auth: {
    user: env.emailUser,
    pass: env.emailPass,
  },
};

export default mailConfig;
