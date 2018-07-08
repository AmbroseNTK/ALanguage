
export enum LogType{
    Info,
    Warning,
    Error
}

export class LogEvent{
    private _type!: LogType;
    public get type(): LogType {
        return this._type;
    }
    public set type(value: LogType) {
        this._type = value;
    }
    private _log!: string;
    public get log(): string {
        return this._log;
    }
    public set log(value: string) {
        this._log = value;
    }

    constructor(type:LogType, message:string){
        this.type = type;
        this.log = message;
    }

}

export class LogHandle{
    private logList! :Array<LogEvent>;

    private static _instance: LogHandle;

    private constructor(){
        this.logList = new Array<LogEvent>();        
    }

    public static get instance(): LogHandle {
        if(this._instance == null){
            this._instance = new LogHandle();
        }
        return LogHandle._instance;
    }
    
    public clearLog():void{
        this.logList = new Array<LogEvent>();
    }

    public pushLog(log:LogEvent):void{
        this.logList.push(log);
    }

    public getAllInfo():Array<LogEvent>{
        return this.logList.filter((value,index,array)=>{
            return value.type == LogType.Info;
        });
    }
    
    public getAllWarning():Array<LogEvent>{
        return this.logList.filter((value,index,array)=>{
            return value.type == LogType.Warning;
        });
    }

    public getAllError():Array<LogEvent>{
        return this.logList.filter((value,index,array)=>{
            return value.type == LogType.Error;
        });
    }
    
}