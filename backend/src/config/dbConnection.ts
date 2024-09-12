import { config } from "dotenv";
import db from "mongoose";
config();
const dburi = `mongodb://${process.env.host}:${process.env.port}/${process.env.db}`;
db.connect(dburi)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Error Connecting to Db");
  });

export default db;
