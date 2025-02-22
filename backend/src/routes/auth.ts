import express, { Response, Request } from "express";
import passport from "../auth/passport";
import { Logout } from "../controllers/auth/logout";
export const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req: Request, res: Response) => {
    console.log("Authentication Successfull");
    res.redirect("/");
  }
);

authRouter.post("/logout", Logout);
