import { config } from "dotenv";
import { app } from "../app";
import db from "./dbConnection";
config();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
db;
