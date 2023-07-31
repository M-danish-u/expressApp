"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routerv1 = void 0;
var express_1 = require("express");
var app = (0, express_1.Router)();
app.get('/', function (req, res) {
    res.json({ status: true, message: "v111" });
});
exports.Routerv1 = app;
