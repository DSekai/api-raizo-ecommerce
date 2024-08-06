"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const ACCEPTED_ORIGINS = ['http://sekaidev.netlify.app', 'https://sekaidev.netlify.app', 'https://sekaidev.com', 'https://www.sekaidev.com', 'http://www.sekaidev.com', 'http://sekaidev.com', 'http://www.port.sekaidev.com', 'http://port.sekaidev.com'];
const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => (0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || ACCEPTED_ORIGINS.includes(origin)) {
            callback(null, true);
            return;
        }
        callback(new Error('Not Allowed by CORS'));
    }
});
exports.corsMiddleware = corsMiddleware;
