"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IndexedList_1 = __importDefault(require("../utils/IndexedList"));
var chai_1 = require("chai");
describe("Indexed List", function () {
    var indexedList = new IndexedList_1.default();
    indexedList.add(2, "World", false);
    indexedList.add(1, "Hello", false);
    it("Add element in correctly order", function () {
        var result = false;
        if (indexedList.getList().length == 2) {
            result = indexedList.getList()[0] == "Hello" && indexedList.getList()[1] == "World";
        }
        chai_1.expect(result).to.equal(true);
    });
    it("Get element by its position", function () {
        var result = false;
        var element = indexedList.get(2);
        result = element != null && element == "World";
        chai_1.expect(result).to.equal(true);
    });
    it("Delete element by its position", function () {
        var result = false;
        indexedList.delete(1);
        result = indexedList.getList().length == 1 && indexedList.getList()[0] == "World";
    });
});
