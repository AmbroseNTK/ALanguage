"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["Number"] = 0] = "Number";
    ComponentType[ComponentType["Text"] = 1] = "Text";
    ComponentType[ComponentType["Operator"] = 2] = "Operator";
    ComponentType[ComponentType["Function"] = 3] = "Function";
    ComponentType[ComponentType["Keyword"] = 4] = "Keyword";
    ComponentType[ComponentType["WallO"] = 5] = "WallO";
    ComponentType[ComponentType["LPathe"] = 6] = "LPathe";
    ComponentType[ComponentType["RPathe"] = 7] = "RPathe";
    ComponentType[ComponentType["Nothing"] = 8] = "Nothing";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
var ExprComponent = /** @class */ (function () {
    function ExprComponent(identifier, type, value) {
        this._identifier = "";
        this._type = ComponentType.Nothing;
        this._priority = 0;
        this.identifier = identifier;
        this.type = type;
        this.value = value;
    }
    Object.defineProperty(ExprComponent.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprComponent.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (value) {
            this._priority = value;
        },
        enumerable: true,
        configurable: true
    });
    return ExprComponent;
}());
exports.default = ExprComponent;
