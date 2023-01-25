"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reIssueToken = exports.updateSession = exports.findSession = exports.createSession = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
const jwt_utils_1 = require("../utils/jwt.utils");
const lodash_1 = require("lodash");
const user_service_1 = require("./user.service");
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
async function updateSession(params, update) {
    return await session_model_1.default.updateOne(params, update);
}
exports.updateSession = updateSession;
async function reIssueToken({ refreshToken }) {
    const { decoded } = (0, jwt_utils_1.verifyJwt)(refreshToken);
    if (!decoded || !(0, lodash_1.get)(decoded, "_id")) {
        return;
    }
    const session = await session_model_1.default.findById((0, lodash_1.get)(decoded, "session"));
    if (!session || !session.valid) {
        false;
    }
    const user = await (0, user_service_1.findUser)({ _id: session.user });
    if (!user) {
        return;
    }
    const accessToken = (0, jwt_utils_1.signJwt)({
        ...user,
        session: session._id
    }, { expiresIn: "1y" });
    return accessToken;
}
exports.reIssueToken = reIssueToken;
