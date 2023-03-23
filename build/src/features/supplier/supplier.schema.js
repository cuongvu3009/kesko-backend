"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = void 0;
const mongoose_1 = require("mongoose");
const supplierSchema = new mongoose_1.Schema({
    SupplierID: { type: Number },
    CompanyName: { type: String },
    ContactName: { type: String },
    ContactTitle: { type: String },
    Address: { type: String },
    City: { type: String },
    Region: { type: String },
    PostalCode: { type: String },
    Phone: { type: String },
    Fax: { type: String },
    HomePage: { type: String }
});
const SupplierModel = (0, mongoose_1.model)('Suppliers', supplierSchema, 'Suppliers');
exports.SupplierModel = SupplierModel;
//# sourceMappingURL=supplier.schema.js.map