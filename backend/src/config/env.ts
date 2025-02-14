import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: process.env.PORT,
  DB_URI: `mongodb://${process.env.host}:${process.env.port}/${process.env.db}`,
  GOOGLE_CLIENT_ID: process.env.CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.CALLBACK_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
};
