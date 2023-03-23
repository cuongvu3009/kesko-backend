"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
class OrderController {
    constructor() {
        this.getOrders = async (req, res, next) => {
            const result = await order_service_1.orderService.getAll();
            res.status(200).json(result);
        };
        this.getOrderDetails = async (req, res, next) => {
            const OrderID = +req.params.OrderID;
            const result = await order_service_1.orderService.getDetails(OrderID);
            res.status(200).json(result);
        };
    }
}
exports.orderController = new OrderController();
//# sourceMappingURL=order.controller.js.map