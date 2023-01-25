"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductHandler = exports.deleteProductHandler = exports.updateProductHandler = exports.createProductHandler = void 0;
const product_service_1 = require("../services/product.service");
async function createProductHandler(req, res) {
    const userId = res.locals.user._doc._id;
    const body = req.body;
    const product = await (0, product_service_1.createProduct)({ ...body, user: userId });
    return res.send(product);
}
exports.createProductHandler = createProductHandler;
async function updateProductHandler(req, res) {
    const userId = res.locals.user._doc._id;
    const productId = req.params._id;
    const update = req.body;
    const product = await (0, product_service_1.getProduct)({ _id: productId });
    if (!product) {
        res.sendStatus(404);
    }
    if (String(product.user) !== userId) {
        res.sendStatus(404);
        console.log(userId, String(product.user));
    }
    const updatedProduct = await (0, product_service_1.findAndUpdateProduct)({ _id: product._id }, update, { new: true });
    return res.send(updatedProduct);
}
exports.updateProductHandler = updateProductHandler;
async function deleteProductHandler(req, res) {
    const userId = res.locals.user._doc._id;
    const productId = req.params._id;
    const product = await (0, product_service_1.getProduct)({ productId });
    if (!product) {
        res.sendStatus(404);
    }
    if (String(product.user) == userId) {
        res.sendStatus(404);
    }
    await (0, product_service_1.deleteProduct)({ _id: product._id });
    return res.sendStatus(200);
}
exports.deleteProductHandler = deleteProductHandler;
async function getProductHandler(req, res) {
    const productId = req.params._id;
    const product = await (0, product_service_1.getProduct)({ _id: productId });
    if (!product) {
        return res.sendStatus(404);
    }
    return res.send(product);
}
exports.getProductHandler = getProductHandler;
