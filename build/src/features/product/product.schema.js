"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    ProductID: { type: Number },
    SupplierID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Suppliers' },
    CategoryID: { type: Number },
    ProductName: { type: String },
    Phone: { type: String },
    QuantityPerUnit: { type: String },
    UnitPrice: { type: String },
    UnitsInStock: { type: Number },
    UnitsOnOrder: { type: Number },
    ReoderLevel: { type: Number },
    Discountinued: { type: String }
});
const ProductModel = (0, mongoose_1.model)('Products', productSchema, 'Products');
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.schema.js.map