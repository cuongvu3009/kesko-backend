"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_route_1 = require("./features/order/order.route");
const BASE_PATH = '/api/v1';
exports.default = (app) => {
    const routes = () => {
        app.use(BASE_PATH, order_route_1.orderRoutes.routes());
    };
    routes();
};
//# sourceMappingURL=routes.js.map