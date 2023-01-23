"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required"
        }),
        password: (0, zod_1.string)({
            required_error: "password is required"
        }).min(6, " password is too short must be 6 characters minimum"),
        passwordConfirmation: (0, zod_1.string)({
            required_error: "password confirmation is required"
        }),
        email: (0, zod_1.string)({
            required_error: "email is required"
        }).email("valid email is required")
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "passwords do not match",
        path: ["passwordConfirmation"]
    })
});
