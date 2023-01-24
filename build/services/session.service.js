"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSession = exports.createSession = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
async function createSession(user, userAgent) {
    const session = await session_model_1.default.create({
        user,
        userAgent
    });
    console.log(session);
    return session;
}
exports.createSession = createSession;
async function findSession(params) {
    return await session_model_1.default.find(params).lean();
}
exports.findSession = findSession;
