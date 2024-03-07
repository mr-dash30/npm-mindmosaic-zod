"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostSchema = exports.createPostSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    username: zod_1.default.string(),
    name: zod_1.default.string().optional(),
    email: zod_1.default.string(),
    password: zod_1.default.string().min(8),
});
exports.signinSchema = zod_1.default.object({
    username: zod_1.default.string(),
    email: zod_1.default.string().optional(),
    password: zod_1.default.string().min(8),
});
exports.createPostSchema = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    published: zod_1.default.boolean().optional(),
});
exports.updatePostSchema = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
    published: zod_1.default.boolean().optional(),
});
// Path: Common/src/index.ts
