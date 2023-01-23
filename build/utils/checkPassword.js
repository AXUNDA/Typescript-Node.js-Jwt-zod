"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const check = async (input, correct) => {
    try {
        return await bcrypt_1.default.compareSync(input, correct);
    }
    catch (error) {
        return false;
    }
};
exports.default = check;
