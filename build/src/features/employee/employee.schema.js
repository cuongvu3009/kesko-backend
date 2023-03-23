"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTerritoryModel = exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    EmployeeID: { type: Number },
    LastName: { type: String },
    FirstName: { type: String },
    Title: { type: String },
    TitleOfCourtesy: { type: String },
    BirthDate: { type: Date },
    HireDate: { type: Date },
    Address: { type: String },
    City: { type: String },
    Region: { type: String },
    PostalCode: { type: String },
    Country: { type: String },
    HomePhone: { type: String },
    Extension: { type: String },
    Photo: { type: Buffer },
    Notes: { type: String },
    ReportsTo: { type: String },
    PhotoPath: { type: String }
});
const employeeTerritoriesSchema = new mongoose_1.Schema({
    EmployeeID: { type: Number },
    TerritoryID: { type: String }
});
const EmployeeModel = (0, mongoose_1.model)('Employees', employeeSchema, 'Employees');
exports.EmployeeModel = EmployeeModel;
const EmployeeTerritoryModel = (0, mongoose_1.model)('EmployeeTerritories', employeeTerritoriesSchema, 'EmployeeTerritories');
exports.EmployeeTerritoryModel = EmployeeTerritoryModel;
//# sourceMappingURL=employee.schema.js.map