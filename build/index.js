"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = require("./Router/V1/app");
dotenv_1.default.config();
var port = process.env.PORT || 5000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.json({ status: true, message: "hey" });
});
app.use('/api/v1', app_1.Routerv1);
app.listen(port, function () {
    console.log("app litsenig at http://localhost:".concat(port));
});
