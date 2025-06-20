"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_PASSWORD = "bwg,kreqngm,me,bmr";
const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    const temp = header === null || header === void 0 ? void 0 : header.split(" ")[1];
    const decoded = jsonwebtoken_1.default.verify(temp, JWT_PASSWORD);
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are logged in"
            });
            return;
        }
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not logged in"
        });
    }
};
exports.userMiddleware = userMiddleware;
