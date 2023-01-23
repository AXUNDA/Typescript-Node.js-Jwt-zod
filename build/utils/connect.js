"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
const data_1 = __importDefault(require("../data"));
function connect() {
    const dbUri = data_1.default.dbUri;
    return mongoose_1.default.connect(dbUri).then(() => {
        logger_1.default.info("connected to db");
    }).catch((err) => {
        logger_1.default.error(err);
        process.exit(1);
    });
}
exports.default = connect;
