"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndUpdateProduct = exports.deleteProduct = exports.getProduct = exports.createProduct = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
async function createProduct(input) {
    return await product_model_1.default.create(input);
}
exports.createProduct = createProduct;
async function getProduct(query, options = { lean: true }) {
    return await product_model_1.default.findOne(query, {}, options);
}
exports.getProduct = getProduct;
async function deleteProduct(query) {
    return await product_model_1.default.deleteOne(query);
}
exports.deleteProduct = deleteProduct;
async function findAndUpdateProduct(query, update, options = { lean: true }) {
    return await product_model_1.default.findOneAndUpdate(query, update, options);
}
exports.findAndUpdateProduct = findAndUpdateProduct;
