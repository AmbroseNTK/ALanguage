"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberParser = /** @class */ (function () {
    function NumberParser() {
    }
    NumberParser.prototype.parse = function (text, list) {
        var regex = /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/gm;
        var matches = text.match(regex);
        if (matches != null) {
        }
        return text;
    };
    return NumberParser;
}());
exports.default = NumberParser;
