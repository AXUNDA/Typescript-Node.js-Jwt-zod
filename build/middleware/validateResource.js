"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
    }
    catch (e) {
        res.status(400).send(e.errors);
    }
};
exports.default = validate;
