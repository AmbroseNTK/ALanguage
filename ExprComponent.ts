export enum ComponentType{
    Number,
    Text,
    Operator,
    Function,
    Keyword,
    WallO,
    LPathe,
    RPathe,
    Nothing
}

export default class ExprComponent{
    protected _identifier = "";
    public get identifier() {
        return this._identifier;
    }
    public set identifier(value) {
        this._identifier = value;
    }
    protected _type = ComponentType.Nothing;
    public get type() {
        return this._type;
    }
    public set type(value) {
        this._type = value;
    }
    protected _value: any;
    public get value(): any {
        return this._value;
    }
    public set value(value: any) {
        this._value = value;
    }

    protected _priority = 0;
    public get priority() {
        return this._priority;
    }
    public set priority(value) {
        this._priority = value;
    }

    constructor(identifier:string, type:ComponentType, value:any){
        this.identifier = identifier;
        this.type = type;
        this.value = value;
    }

}