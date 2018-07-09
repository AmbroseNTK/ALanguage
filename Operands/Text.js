"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExprComponent_1 = __importStar(require("../ExprComponent"));
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(text) {
        return _super.call(this, "Text", ExprComponent_1.ComponentType.Text, text) || this;
    }
    Text.prototype.process = function (args) {
    };
    return Text;
}(ExprComponent_1.default));
exports.default = Text;
