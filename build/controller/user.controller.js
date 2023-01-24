"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = exports.createUser = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
// import { createUser } from "../services/user.service";
const hash_1 = __importDefault(require("../utils/hash"));
const user_model_1 = __importDefault(require("../models/user.model"));
const lodash_1 = require("lodash");
async function createUser(req, res) {
    const { name, email, password } = req.body;
    try {
        const newUser = new user_model_1.default({
            name,
            email,
            password: await (0, hash_1.default)(password)
        });
        await newUser.save();
        return res.status(200).json((0, lodash_1.omit)(newUser.toJSON(), ["password", "createdAt"]));
        // return user
    }
    catch (error) {
        logger_1.default.error(error);
        return res.status(409).json(error);
    }
}
exports.createUser = createUser;
async function healthCheck(req, res) {
    try {
        return res.status(200).json({
            message: "health check normal"
        });
    }
    catch (error) {
        return res.status(400).json({ error });
    }
}
exports.healthCheck = healthCheck;
