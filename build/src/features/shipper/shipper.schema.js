"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipperModel = void 0;
const mongoose_1 = require("mongoose");
const shipperSchema = new mongoose_1.Schema({
    ShipperID: { type: Number },
    Phone: { type: String },
    CompanyName: { type: String }
});
const ShipperModel = (0, mongoose_1.model)('Shippers', shipperSchema, 'Shippers');
exports.ShipperModel = ShipperModel;
//# sourceMappingURL=shipper.schema.js.map