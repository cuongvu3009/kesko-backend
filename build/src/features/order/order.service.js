"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const order_schema_1 = require("./order.schema");
class OrderService {
    constructor() {
        this.getAll = async () => {
            const result = await order_schema_1.OrderModel.aggregate([
                {
                    $lookup: {
                        from: 'Customers',
                        localField: 'CustomerID',
                        foreignField: 'CustomerID',
                        as: 'CustomerInfo'
                    }
                }
            ]);
            return result;
        };
        this.getDetails = async (OrderID) => {
            const result = await order_schema_1.OrderDetailsModel.aggregate([
                { $match: { OrderID } },
                {
                    $lookup: {
                        from: 'Products',
                        localField: 'ProductID',
                        foreignField: 'ProductID',
                        as: 'ProductInfo'
                    }
                }
            ]);
            return result;
        };
    }
}
exports.orderService = new OrderService();
//# sourceMappingURL=order.service.js.map