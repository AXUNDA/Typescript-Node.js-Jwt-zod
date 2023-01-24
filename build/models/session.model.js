"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    valid: { type: Boolean, default: true },
    userAgent: { type: String }
}, { timestamps: true });
const SessionModel = (0, mongoose_1.model)('Session', sessionSchema);
exports.default = SessionModel;
