"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    CategoryID: { type: Number },
    CategoryName: { type: String },
    Description: { type: String },
    Picture: { type: Buffer } // casted to MongoDB's BSON type: binData
});
const CategoriesModel = (0, mongoose_1.model)('Categories', categorySchema, 'Categories');
exports.CategoriesModel = CategoriesModel;
//# sourceMappingURL=category.schema.js.map