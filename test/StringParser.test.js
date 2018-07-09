"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StringParser_1 = __importDefault(require("../Parsers/StringParser"));
var IndexedList_1 = __importDefault(require("../utils/IndexedList"));
var chai_1 = require("chai");
describe("Text parser", function () {
    var parser = new StringParser_1.default();
    it("Get \"Hello\" \"World\" from \"\"Hello\" a b c + - * / \"World\"\"", function () {
        var list = new IndexedList_1.default();
        var input = "\"Hello\" a b c + - * / \"World\"";
        input = parser.parse(input, list);
        chai_1.expect(list.getList().length == 2 && list.getList()[0].value == "Hello" && list.getList()[1].value == "World").to.equal(true);
    });
});
