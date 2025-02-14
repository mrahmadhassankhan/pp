import express, { Response, Request } from "express";
import passport from "../auth/passport";
export const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req: Request, res: Response) => {
    console.log("Authentication Successfull");
    res.redirect("http://localhost:3000/");
  }
);
