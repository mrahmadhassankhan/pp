"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const dburi = `mongodb://${process.env.host}:${process.env.port}/${process.env.db}`;
mongoose_1.default.connect(dburi)
    .then(() => {
    console.log("Connected to DB");
})
    .catch(() => {
    console.log("Error Connecting to Db");
});
exports.default = mongoose_1.default;
