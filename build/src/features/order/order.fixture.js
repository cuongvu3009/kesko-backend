"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetails1 = exports.order2 = exports.order1 = void 0;
const order_schema_1 = require("./order.schema");
exports.order1 = new order_schema_1.OrderModel({
    OrderID: 10248,
    CustomerID: 'VINET',
    ShipAddress: 'Kannelmaki 15',
    ShipCity: 'Helsinki',
    ShipRegion: 'Uusimaa',
    ShipPostalCode: '00940',
    ShipCountry: 'Finland',
    CustomerInfo: [
        {
            ContactName: 'Test Customer'
        }
    ]
});
exports.order2 = new order_schema_1.OrderModel({
    OrderID: 10249,
    CustomerID: 'TOMSP',
    ShipAddress: 'Spellinintie 15',
    ShipCity: 'Helsinki',
    ShipRegion: 'Uusimaa',
    ShipPostalCode: '00940',
    ShipCountry: 'Finland',
    CustomerInfo: [
        {
            ContactName: 'Test Customer 2'
        }
    ]
});
exports.orderDetails1 = new order_schema_1.OrderDetailsModel({
    // _id: '64161bb3ae82a79dfbfd9c2d',
    Discount: 0,
    OrderID: 12345,
    ProductID: 11,
    Quantity: 12,
    UnitPrice: 14
});
//# sourceMappingURL=order.fixture.js.map