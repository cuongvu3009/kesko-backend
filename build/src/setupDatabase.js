"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const log = config_1.config.createLogger('setupDatabase');
const databaseConnection = () => {
    const connect = () => {
        mongoose_1.default
            .set('strictQuery', true)
            .connect(`${config_1.config.DATABASE_URL}`)
            .then(() => {
            log.info('Database is succesfully connected!');
        })
            .catch((err) => {
            log.error(err);
            return process.exit(1);
        });
    };
    connect();
    //	if db is disconnected, then try to reconnect again
    mongoose_1.default.connection.on('disconnected', connect);
};
exports.default = databaseConnection;
//# sourceMappingURL=setupDatabase.js.map