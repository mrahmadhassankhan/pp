import express, { json, Request, Response } from "express";
import session from "express-session";
import passport from "../auth/passport";
import connecttoMongo from "./db";
import { authRouter } from "../routes/auth";
import env from "./env";
const app = express();
connecttoMongo;

const PORT = process.env.PORT || 3000;
app.use(
  session({
    secret: env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "lax", maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);
app.get("/", (req: Request, res: Response) => {
  console.log("User authentication status:", req.isAuthenticated());
  if (req.isAuthenticated()) {
    // res.send(`Welcome, ${req.user.displayName}`);
    res.send(
      `<html><body><form action="/logout" method="post"><button>Logout</button></form></body></html>`
    );
  } else {
    res.redirect("http://localhost:3000/auth/google");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
export default app;
