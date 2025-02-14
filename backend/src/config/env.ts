import dotenv from "dotenv";
dotenv.config();
export default {
  PORT: process.env.PORT,
  DB_URI: `mongodb://${process.env.host}:${process.env.port}/${process.env.db}`,
};
