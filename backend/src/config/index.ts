import express, { Request, Response } from "express";
import connecttoMongo from "./db";
const app = express();
connecttoMongo;

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Programming Parnter.com");
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
export default app;
