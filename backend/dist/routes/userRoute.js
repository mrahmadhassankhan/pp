"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const userAuthController_1 = require("../controllers/userAuthController");
//Signup User
app_1.app.use("/signup", userAuthController_1.userSignupController);
//Login User
app_1.app.use("/login", userAuthController_1.userLoginController);
//Logout User
app_1.app.use("/logout", userAuthController_1.userLogoutController);
