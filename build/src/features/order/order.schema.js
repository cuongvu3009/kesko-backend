"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsModel = exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    OrderID: { type: Number },
    CustomerID: { type: String },
    EmployeeID: { type: Number },
    OrderDate: { type: Date },
    RequiredDate: { type: Date },
    ShippedDate: { type: Date },
    Freight: { type: Number },
    ShipName: { type: String },
    ShipAddress: { type: String },
    ShipCity: { type: String },
    ShipRegion: { type: String },
    ShipPostalCode: { type: String },
    ShipCountry: { type: String }
});
const orderDetailsSchema = new mongoose_1.Schema({
    OrderID: { type: Number },
    ProductID: { type: Number },
    UnitPrice: { type: Number },
    Quantity: { type: Number },
    Discount: { type: Number }
});
const OrderModel = (0, mongoose_1.model)('Orders', orderSchema, 'Orders');
exports.OrderModel = OrderModel;
const OrderDetailsModel = (0, mongoose_1.model)('OrderDetails', orderDetailsSchema, 'OrderDetails');
exports.OrderDetailsModel = OrderDetailsModel;
//# sourceMappingURL=order.schema.js.map