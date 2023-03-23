"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_schema_1 = require("./order.schema");
const order_fixture_1 = require("./order.fixture");
const db_helper_1 = __importDefault(require("../../shared/db-helper"));
const order_service_1 = require("./order.service");
let mongodHelper;
beforeAll(async () => {
    mongodHelper = await (0, db_helper_1.default)();
});
beforeEach(async () => {
    await order_schema_1.OrderModel.insertMany([order_fixture_1.order1, order_fixture_1.order2]);
    await order_schema_1.OrderDetailsModel.insertMany([order_fixture_1.orderDetails1]);
});
afterEach(async () => {
    await mongodHelper.clearDatabase();
});
afterAll(async () => {
    await mongodHelper.closeDatabase();
});
describe('Test orderService', () => {
    test('Get all orders', async () => {
        const orders = await order_service_1.orderService.getAll();
        expect(orders === null || orders === void 0 ? void 0 : orders.length).toBe(2);
        expect(orders[0]['CustomerID']).toBe('VINET');
    });
    test('Get orderDetails', async () => {
        const orders = await order_service_1.orderService.getDetails(12345);
        expect(orders === null || orders === void 0 ? void 0 : orders.length).toBe(1);
        expect(orders[0]['OrderID']).toBe(12345);
    });
});
//# sourceMappingURL=order.test.js.map