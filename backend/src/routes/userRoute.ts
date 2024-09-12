import { app } from "../app";
import {
  userLoginController,
  userLogoutController,
  userSignupController,
} from "../controllers/userAuthController";

//Signup User
app.use("/signup", userSignupController);

//Login User
app.use("/login", userLoginController);

//Logout User
app.use("/logout", userLogoutController);


