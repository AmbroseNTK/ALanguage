"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogType;
(function (LogType) {
    LogType[LogType["Info"] = 0] = "Info";
    LogType[LogType["Warning"] = 1] = "Warning";
    LogType[LogType["Error"] = 2] = "Error";
})(LogType = exports.LogType || (exports.LogType = {}));
var LogEvent = /** @class */ (function () {
    function LogEvent(type, message) {
        this.type = type;
        this.log = message;
    }
    Object.defineProperty(LogEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogEvent.prototype, "log", {
        get: function () {
            return this._log;
        },
        set: function (value) {
            this._log = value;
        },
        enumerable: true,
        configurable: true
    });
    return LogEvent;
}());
exports.LogEvent = LogEvent;
var LogHandle = /** @class */ (function () {
    function LogHandle() {
        this.logList = new Array();
    }
    Object.defineProperty(LogHandle, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new LogHandle();
            }
            return LogHandle._instance;
        },
        enumerable: true,
        configurable: true
    });
    LogHandle.prototype.clearLog = function () {
        this.logList = new Array();
    };
    LogHandle.prototype.pushLog = function (log) {
        this.logList.push(log);
    };
    LogHandle.prototype.getAllInfo = function () {
        return this.logList.filter(function (value, index, array) {
            return value.type == LogType.Info;
        });
    };
    LogHandle.prototype.getAllWarning = function () {
        return this.logList.filter(function (value, index, array) {
            return value.type == LogType.Warning;
        });
    };
    LogHandle.prototype.getAllError = function () {
        return this.logList.filter(function (value, index, array) {
            return value.type == LogType.Error;
        });
    };
    return LogHandle;
}());
exports.LogHandle = LogHandle;
