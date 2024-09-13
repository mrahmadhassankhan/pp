"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = require("../app");
const dbConnection_1 = __importDefault(require("./dbConnection"));
(0, dotenv_1.config)();
const PORT = process.env.PORT;
app_1.app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
dbConnection_1.default;
