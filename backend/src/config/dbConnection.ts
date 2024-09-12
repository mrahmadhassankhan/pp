import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/programmingpartner");
  } catch (error) {
    console.error("Error while connecting to DB:", error);
  }
})();

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error while connecting to DB:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("DB Disconnected");
});

export default mongoose;
