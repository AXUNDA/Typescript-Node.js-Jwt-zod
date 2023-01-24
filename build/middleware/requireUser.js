"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
function requireUser(req, res, next) {
    const user = res.locals.user;
    if (!user) {
        return res.status(404).json({
            error: "user not found",
        });
    }
    console.log(user);
    return next();
}
exports.requireUser = requireUser;
