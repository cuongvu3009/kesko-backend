"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
    CustomerID: { type: String },
    CompanyName: { type: String },
    ContactName: { type: String },
    ContactTile: { type: String },
    City: { type: String },
    Address: { type: String },
    Region: { type: String },
    PostalCode: { type: String },
    Country: { type: String },
    Phone: { type: String },
    Fax: { type: String }
});
const CustomerModel = (0, mongoose_1.model)('Customers', customerSchema, 'Customers');
exports.CustomerModel = CustomerModel;
//# sourceMappingURL=customer.schema.js.map