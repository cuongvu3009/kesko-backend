"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionModel = exports.TerritoryModel = void 0;
const mongoose_1 = require("mongoose");
const territorySchema = new mongoose_1.Schema({
    TerritoryID: { type: String },
    RegionID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Regions' },
    TerritoryDescription: { type: String, trim: true }
});
const regionSchema = new mongoose_1.Schema({
    RegionID: { type: Number },
    RegionDescription: { type: String }
});
const TerritoryModel = (0, mongoose_1.model)('Territories', territorySchema, 'Territories');
exports.TerritoryModel = TerritoryModel;
const RegionModel = (0, mongoose_1.model)('Regions', regionSchema, 'Regions');
exports.RegionModel = RegionModel;
//# sourceMappingURL=territory.schema.js.map