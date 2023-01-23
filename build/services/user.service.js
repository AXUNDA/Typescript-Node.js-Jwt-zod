"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const hash_1 = __importDefault(require("../utils/hash"));
async function createUser(input) {
    const { name, email, password } = input;
    try {
        return await user_model_1.default.create({
            name,
            email,
            password: (0, hash_1.default)(password)
        });
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.createUser = createUser;
