"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const bunyan_1 = __importDefault(require("bunyan"));
dotenv_1.default.config();
class Config {
    constructor() {
        this.DEFAULT_DATABASE_URL = 'mongodb+srv://cuong:1234@nodeexpressproject.nlzou.mongodb.net/Kesko-Exercise?retryWrites=true&w=majority';
        this.DEFAULT_NODE_ENV = 'development';
        this.DEFAULT_CLIENT_URL = 'http://localhost:3000';
        this.DATABASE_URL = process.env.DATABASE_URl || this.DEFAULT_DATABASE_URL;
        this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
        this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
        this.NODE_ENV = process.env.NODE_ENV || this.DEFAULT_NODE_ENV;
        this.CLIENT_URL = process.env.CLIENT_URL || this.DEFAULT_CLIENT_URL;
        this.SERVER_PORT = process.env.SERVER_PORT || '';
        this.REDIS_HOST = process.env.REDIS_HOST || '';
        this.REDIS_PASSWORD = process.env.REDIS_PASSWORD || '';
        this.REDIS_PORT = process.env.REDIS_PORT || '';
    }
    //	logger
    createLogger(name) {
        return bunyan_1.default.createLogger({ name, level: 'debug' });
    }
    //	make sure all env variable in config exist
    validateConfig() {
        for (const [key, value] of Object.entries(this)) {
            if (value === undefined) {
                throw new Error(`Configuration ${key} is undefined`);
            }
        }
    }
}
exports.config = new Config();
//# sourceMappingURL=config.js.map