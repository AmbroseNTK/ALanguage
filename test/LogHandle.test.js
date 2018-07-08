"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogHandle_1 = require("../LogHandle");
var chai_1 = require("chai");
describe("Get log", function () {
    it("Should return all info log", function () {
        LogHandle_1.LogHandle.instance.clearLog();
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Warning, "Warning 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 2"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 2"));
        var result = LogHandle_1.LogHandle.instance.getAllInfo();
        var check = result.length == 2 && result[0].log == "Info 1" && result[1].log == "Info 2";
        chai_1.expect(check).to.equal(true);
    });
    it("Should return all warning log", function () {
        LogHandle_1.LogHandle.instance.clearLog();
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Warning, "Warning 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 2"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 2"));
        var result = LogHandle_1.LogHandle.instance.getAllWarning();
        var check = result.length == 1 && result[0].log == "Warning 1";
        chai_1.expect(check).to.equal(true);
    });
    it("Should return all error log", function () {
        LogHandle_1.LogHandle.instance.clearLog();
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Warning, "Warning 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Info, "Info 2"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 1"));
        LogHandle_1.LogHandle.instance.pushLog(new LogHandle_1.LogEvent(LogHandle_1.LogType.Error, "Error 2"));
        var result = LogHandle_1.LogHandle.instance.getAllError();
        var check = result.length == 2 && result[0].log == "Error 1" && result[1].log == "Error 2";
        chai_1.expect(check).to.equal(true);
    });
});
