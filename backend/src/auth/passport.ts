import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import env from "../config/env";
const clientId =
  env.GOOGLE_CLIENT_ID ??
  (() => {
    throw new Error("Google Client Id not defined");
  })();
const clientSecret =
  env.GOOGLE_CLIENT_SECRET ??
  (() => {
    throw new Error("Google Client Secret not defined");
  })();
passport.use(
  new GoogleStrategy(
    {
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: env.GOOGLE_CALLBACK_URL,
    },
    async (accesssToken, refreshToken, profile, done) => {
      console.log(accesssToken);
      console.log(profile);
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  done(null, user);
});
export default passport;
