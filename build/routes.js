"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController = __importStar(require("./controller/user.controller"));
const validateResource_1 = __importDefault(require("./middleware/validateResource"));
const user_schema_1 = require("./schema/user.schema");
const sessionController = __importStar(require("./controller/session.controller"));
const session_schema_1 = require("./schema/session.schema");
const requireUser_1 = require("./middleware/requireUser");
const router = express_1.default.Router();
router.get("/health", userController.healthCheck);
router.post("/create/user", (0, validateResource_1.default)(user_schema_1.createUserSchema), userController.createUser);
router.post("/api/session", (0, validateResource_1.default)(session_schema_1.createSessionSchema), sessionController.CreateSessionHandler);
router.get("/api/session", requireUser_1.requireUser, sessionController.getUserSessions);
// function routes (app:Express){
//       app.get("/healthcheck",(req:Request,res:Response):Response=>{
//             return res.status(200).json({health_status:"normal"})
//       })
//       app.post("/api/user",validate(createUserSchema),createUserHandler)
// }
exports.default = router;
