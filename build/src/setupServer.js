"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeServer = void 0;
const express_1 = require("express");
const config_1 = require("./config");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const compression_1 = __importDefault(require("compression"));
require("express-async-errors");
//	routes
const routes_1 = __importDefault(require("./routes"));
const error_handler_1 = require("./shared/error-handler");
const log = config_1.config.createLogger('server');
class NodeServer {
    constructor(app) {
        this.app = app;
    }
    start() {
        this.securityMiddleware(this.app);
        this.standardMiddleware(this.app);
        this.routesMiddleware(this.app);
        this.globalErrorHandler(this.app);
        this.startServer(this.app);
    }
    securityMiddleware(app) {
        app.use((0, hpp_1.default)());
        app.use((0, helmet_1.default)());
        app.use((0, cors_1.default)({
            origin: '*',
            credentials: true,
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
        }));
    }
    standardMiddleware(app) {
        app.use((0, compression_1.default)());
        app.use((0, express_1.json)({ limit: '50mb' }));
        app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    }
    routesMiddleware(app) {
        (0, routes_1.default)(app);
    }
    globalErrorHandler(app) {
        app.all('*', (req, res) => {
            res.status(http_status_codes_1.default.NOT_FOUND).json({ message: `${req.originalUrl} not found` });
        });
        app.use((error, _req, res, next) => {
            log.error(error);
            if (error instanceof error_handler_1.CustomError) {
                return res.status(error.statusCode).json(error.serializeErrors());
            }
            next();
        });
    }
    async startServer(app) {
        try {
            const httpServer = new http_1.default.Server(app);
            this.startHttpServer(httpServer);
        }
        catch (error) {
            log.error(error);
        }
    }
    startHttpServer(httpServer) {
        log.info(`Worker with process id of ${process.pid} has started...`);
        log.info(`Server has started with process ${process.pid}`);
        httpServer.listen(config_1.config.SERVER_PORT, () => {
            log.info(`Server running on port ${config_1.config.SERVER_PORT}`);
        });
    }
}
exports.NodeServer = NodeServer;
//# sourceMappingURL=setupServer.js.map