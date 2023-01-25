"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const jwt_utils_1 = require("../utils/jwt.utils");
const session_service_1 = require("../services/session.service");
async function deserializeUser(req, res, next) {
    // /const accessToken = get(req,"headers.authorization","").replace(/^Bearer\s/,"")
    try {
        const authHeader = req.headers.authorization;
        const accessToken = authHeader.split(" ")[1];
        const refreshToken = (0, lodash_1.get)(req, "headers.x-refresh");
        console.log(accessToken);
        if (!accessToken) {
            // console.log("hello world")
            return next();
        }
        const { decoded, expired } = (0, jwt_utils_1.verifyJwt)(accessToken);
        // console.log(decoded,expired)
        if (decoded) {
            console.log(decoded);
            res.locals.user = decoded;
        }
        if (expired && refreshToken) {
            const newAccessToken = await (0, session_service_1.reIssueToken)({ refreshToken });
            if (newAccessToken) {
                res.setHeader("x-access-token", newAccessToken);
                const decoded = (0, jwt_utils_1.verifyJwt)(newAccessToken);
                res.locals.user = decoded;
                return next();
            }
        }
        return next();
    }
    catch (error) {
        return next();
    }
}
exports.default = deserializeUser;
