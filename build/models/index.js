"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Product = exports.Category = void 0;
var category_1 = require("./category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return __importDefault(category_1).default; } });
var product_1 = require("./product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return __importDefault(product_1).default; } });
var user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
