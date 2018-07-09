"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexedListElement = /** @class */ (function () {
    function IndexedListElement(id, element) {
        this.id = id;
        this.element = element;
    }
    Object.defineProperty(IndexedListElement.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IndexedListElement.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    return IndexedListElement;
}());
var IndexedList = /** @class */ (function () {
    function IndexedList() {
        this.list = new Array();
    }
    IndexedList.prototype.add = function (pos, element, replaceDupPos) {
        if (replaceDupPos === void 0) { replaceDupPos = true; }
        var existed = this.list.filter(function (value, index, array) {
            return value.id == pos;
        });
        if (existed.length != 0) {
            if (replaceDupPos) {
                existed[0].element = element;
                return;
            }
        }
        this.list.push(new IndexedListElement(pos, element));
        this.list.sort(function (a, b) {
            if (a.id > b.id)
                return 1;
            else if (a.id < b.id)
                return -1;
            else
                return 0;
        });
    };
    IndexedList.prototype.get = function (pos) {
        var existed = this.list.filter(function (value, index, array) {
            return value.id == pos;
        });
        if (existed.length != 0) {
            return existed[0].element;
        }
        return null;
    };
    IndexedList.prototype.delete = function (pos) {
        this.list = this.list.filter(function (value, index, array) {
            return value.id != pos;
        });
    };
    IndexedList.prototype.getList = function () {
        var result = new Array();
        this.list.forEach(function (element) {
            result.push(element.element);
        });
        return result;
    };
    return IndexedList;
}());
exports.default = IndexedList;
