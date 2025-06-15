"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.linkModel = exports.UserModel = exports.Tag = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
const contentSchema = new mongoose_1.default.Schema({
    link: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
});
const tagSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, unique: true },
});
const linkSchema = new mongoose_1.default.Schema({
    hash: String,
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true, unique: true }
});
const Tag = mongoose_1.default.model("Tag", tagSchema);
exports.Tag = Tag;
const UserModel = mongoose_1.default.model("User", userSchema);
exports.UserModel = UserModel;
const linkModel = mongoose_1.default.model("Links", linkSchema);
exports.linkModel = linkModel;
const ContentModel = mongoose_1.default.model("Content", contentSchema);
exports.ContentModel = ContentModel;
