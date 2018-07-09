"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expr = /** @class */ (function () {
    function Expr() {
        this._rawExpr = "";
        this.listComponent = new Array();
    }
    Object.defineProperty(Expr.prototype, "rawExpr", {
        get: function () {
            return this._rawExpr;
        },
        set: function (value) {
            this._rawExpr = value;
            this.listComponent = this.parse(this.rawExpr);
        },
        enumerable: true,
        configurable: true
    });
    Expr.prototype.parse = function (rawExpr) {
        var component = new Array();
        return component;
    };
    return Expr;
}());
exports.default = Expr;
