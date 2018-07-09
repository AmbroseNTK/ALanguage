"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Text_1 = __importDefault(require("../Operands/Text"));
var StringParser = /** @class */ (function () {
    function StringParser() {
    }
    StringParser.prototype.parse = function (text, list) {
        var regex = /(["'])(?:(?=(\\?))\2.)*?\1/gm;
        var matches = text.match(regex);
        if (matches != null) {
            for (var i = 0; i < matches.length; i++) {
                var pos = text.search(matches[i]);
                list.add(pos, new Text_1.default(matches[i].substring(1, matches[i].length - 1)));
                var pseudoStr = this.createPseudoString(matches[i].length);
                text = text.replace(matches[i], pseudoStr);
            }
        }
        return text;
    };
    StringParser.prototype.createPseudoString = function (len) {
        var result = "";
        for (var i = 0; i < len; i++) {
            result += String.fromCharCode(205);
        }
        return result;
    };
    return StringParser;
}());
exports.default = StringParser;
