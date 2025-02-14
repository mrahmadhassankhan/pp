"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = __importDefault(require("./env"));
mongoose_1.default
    .connect(env_1.default.DB_URI)
    .then(() => {
    console.log("Connected to DB");
})
    .catch((error) => {
    console.log(`Error Connected to Db ${error}`);
});
exports.default = mongoose_1.default;
