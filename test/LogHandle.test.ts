import { LogHandle, LogEvent, LogType } from '../LogHandle';
import {expect} from 'chai';

describe("Get log",()=>{
    it("Should return all info log",()=>{
       
        LogHandle.instance.clearLog();

        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Warning,"Warning 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 2"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 2"));

        let result = LogHandle.instance.getAllInfo();

        let check = result.length==2 && result[0].log == "Info 1" && result[1].log == "Info 2";

        expect(check).to.equal(true);

    });
    it("Should return all warning log",()=>{
       
        LogHandle.instance.clearLog();

        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Warning,"Warning 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 2"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 2"));

        let result = LogHandle.instance.getAllWarning();

        let check = result.length==1 && result[0].log == "Warning 1";

        expect(check).to.equal(true);

    });
    it("Should return all error log",()=>{
       
        LogHandle.instance.clearLog();

        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Warning,"Warning 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Info,"Info 2"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 1"));
        LogHandle.instance.pushLog(new LogEvent(LogType.Error,"Error 2"));

        let result = LogHandle.instance.getAllError();

        let check = result.length==2 && result[0].log == "Error 1" && result[1].log == "Error 2";

        expect(check).to.equal(true);

    });
});