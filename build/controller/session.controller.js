"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSessions = exports.CreateSessionHandler = void 0;
const user_service_1 = require("../services/user.service");
const session_service_1 = require("../services/session.service");
const jwt_utils_1 = require("../utils/jwt.utils");
const session_service_2 = require("../services/session.service");
async function CreateSessionHandler(req, res) {
    try {
        const user = await (0, user_service_1.validatePassword)(req.body);
        if (!user) {
            res.status(404).json({
                status: "error",
                message: "invalid credentials"
            });
        }
        const session = await (0, session_service_1.createSession)(user._id, req.get("user-agent") || "");
        const accessToken = (0, jwt_utils_1.signJwt)({
            ...user,
            session: session._id
        }, { expiresIn: "1y" });
        const refreshToken = (0, jwt_utils_1.signJwt)({
            ...user,
            session: session._id
        }, { expiresIn: "1y" });
        return res.send({ accessToken, refreshToken });
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.CreateSessionHandler = CreateSessionHandler;
async function getUserSessions(req, res) {
    try {
        const user = res.locals.user._doc._id;
        const session = await (0, session_service_2.findSession)({ user: user, valid: true });
        return res.send(session);
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.getUserSessions = getUserSessions;
