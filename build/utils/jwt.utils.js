"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const data_1 = __importDefault(require("../data"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { privateKey, publicKey } = data_1.default;
function signJwt(object, options) {
    return jsonwebtoken_1.default.sign(object, privateKey, {
        ...(options && options),
        algorithm: "HS384"
    });
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, privateKey);
        return {
            valid: true,
            expired: false,
            decoded
        };
    }
    catch (error) {
        return {
            valid: false,
            expired: true,
            decoded: null
        };
    }
}
exports.verifyJwt = verifyJwt;
