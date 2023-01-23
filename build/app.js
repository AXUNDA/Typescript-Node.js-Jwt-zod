"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const connect_1 = __importDefault(require("./utils/connect"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = __importDefault(require("./routes"));
const data_1 = __importDefault(require("./data"));
const { port } = data_1.default;
app.use(express_1.default.json());
app.use("/", routes_1.default);
app.listen(port, async () => {
    logger_1.default.info("server active");
    await (0, connect_1.default)();
    // routes(app)
});
