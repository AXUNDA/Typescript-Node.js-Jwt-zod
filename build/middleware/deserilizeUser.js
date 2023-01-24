"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_utils_1 = require("../utils/jwt.utils");
function deserializeUser(req, res, next) {
    // /const accessToken = get(req,"headers.authorization","").replace(/^Bearer\s/,"")
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(" ")[1];
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
    return next();
}
exports.default = deserializeUser;
