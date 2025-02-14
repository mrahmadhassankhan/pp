import connecttoMongo from "mongoose";
import env from "./env";

connecttoMongo
  .connect(env.DB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(`Error Connected to Db ${error}`);
  });

export default connecttoMongo;
