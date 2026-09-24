import { env } from "./env.js";

const mailConfig = {
  service: "gmail",
  auth: {
    user: env.emailUser,
    pass: env.emailPass,
  },
};

export default mailConfig;
