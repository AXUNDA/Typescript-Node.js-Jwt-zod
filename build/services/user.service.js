"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.createUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const hash_1 = __importDefault(require("../utils/hash"));
const checkPassword_1 = __importDefault(require("../utils/checkPassword"));
async function createUser(input) {
    const { name, email, password } = input;
    try {
        return await user_model_1.default.create({
            name,
            email,
            password: await (0, hash_1.default)(password)
        });
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.createUser = createUser;
async function validatePassword({ email, password }) {
    try {
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            return;
        }
        const valid = await (0, checkPassword_1.default)(password, user.password);
        if (valid) {
            //    return omit(user.toJSON(),"password")
            return user;
        }
        return;
    }
    catch (error) {
        throw new Error(error);
    }
}
exports.validatePassword = validatePassword;
