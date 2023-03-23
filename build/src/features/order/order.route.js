"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
class OrderRoutes {
    constructor() {
        this.router = express_1.default.Router();
    }
    routes() {
        this.router.get('/orders', order_controller_1.orderController.getOrders);
        this.router.get('/orders/:OrderID', order_controller_1.orderController.getOrderDetails);
        return this.router;
    }
}
exports.orderRoutes = new OrderRoutes();
//# sourceMappingURL=order.route.js.map