"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
//  Models import
const category_schema_1 = require("./features/category/category.schema");
const customer_schema_1 = require("./features/customer/customer.schema");
const employee_schema_1 = require("./features/employee/employee.schema");
const order_schema_1 = require("./features/order/order.schema");
const order_schema_2 = require("./features/order/order.schema");
const product_schema_1 = require("./features/product/product.schema");
const territory_schema_1 = require("./features/territory/territory.schema");
const shipper_schema_1 = require("./features/shipper/shipper.schema");
const supplier_schema_1 = require("./features/supplier/supplier.schema");
const territory_schema_2 = require("./features/territory/territory.schema");
const employee_schema_2 = require("./features/employee/employee.schema");
//  Data import
const Categories_json_1 = __importDefault(require("./data/documents/Categories.json"));
const Customers_json_1 = __importDefault(require("./data/documents/Customers.json"));
const Employees_json_1 = __importDefault(require("./data/documents/Employees.json"));
const Order_Details_json_1 = __importDefault(require("./data/documents/Order Details.json"));
const Orders_json_1 = __importDefault(require("./data/documents/Orders.json"));
const Products_json_1 = __importDefault(require("./data/documents/Products.json"));
const Regions_json_1 = __importDefault(require("./data/documents/Regions.json"));
const Shippers_json_1 = __importDefault(require("./data/documents/Shippers.json"));
const Suppliers_json_1 = __importDefault(require("./data/documents/Suppliers.json"));
const Territories_json_1 = __importDefault(require("./data/documents/Territories.json"));
const EmployeeTerritories_json_1 = __importDefault(require("./data/documents/EmployeeTerritories.json"));
const log = config_1.config.createLogger('populate');
const populate = async () => {
    try {
        mongoose_1.default
            .connect(config_1.config.DATABASE_URL)
            .then(async () => {
            await category_schema_1.CategoriesModel.deleteMany();
            await category_schema_1.CategoriesModel.create(Categories_json_1.default);
            await customer_schema_1.CustomerModel.deleteMany();
            await customer_schema_1.CustomerModel.create(Customers_json_1.default);
            await shipper_schema_1.ShipperModel.deleteMany();
            await shipper_schema_1.ShipperModel.create(Shippers_json_1.default);
            await supplier_schema_1.SupplierModel.deleteMany();
            await supplier_schema_1.SupplierModel.create(Suppliers_json_1.default);
            await territory_schema_1.RegionModel.deleteMany();
            await territory_schema_1.RegionModel.create(Regions_json_1.default);
            await territory_schema_2.TerritoryModel.deleteMany();
            await territory_schema_2.TerritoryModel.create(Territories_json_1.default);
            await employee_schema_2.EmployeeTerritoryModel.deleteMany();
            await employee_schema_2.EmployeeTerritoryModel.create(EmployeeTerritories_json_1.default);
            await employee_schema_1.EmployeeModel.deleteMany();
            await employee_schema_1.EmployeeModel.create(Employees_json_1.default);
            await product_schema_1.ProductModel.deleteMany();
            await product_schema_1.ProductModel.create(Products_json_1.default);
            await order_schema_2.OrderModel.deleteMany();
            await order_schema_2.OrderModel.create(Orders_json_1.default);
            await order_schema_1.OrderDetailsModel.deleteMany();
            await order_schema_1.OrderDetailsModel.create(Order_Details_json_1.default);
            log.info('populated successfully');
            process.exit(0);
        })
            .catch((err) => {
            log.error(err);
            return process.exit(1);
        });
    }
    catch (error) {
        log.error(error);
        process.exit(1);
    }
};
populate();
//# sourceMappingURL=populate.js.map