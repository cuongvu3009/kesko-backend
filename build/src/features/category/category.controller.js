"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const category_schema_1 = require("./category.schema");
const getCategories = async (req, res, next) => {
    try {
        const result = await category_schema_1.CategoriesModel.find({});
        res.send(result);
    }
    catch (error) {
        next(error);
    }
};
exports.getCategories = getCategories;
//# sourceMappingURL=category.controller.js.map