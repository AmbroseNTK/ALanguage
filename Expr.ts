import ExprCom from './ExprCom';

export default class Expr{

    private _rawExpr: string = "";
    public get rawExpr(): string {
        return this._rawExpr;
    }

    public set rawExpr(value: string) {
        this._rawExpr = value;
        this.listComponent = this.parse(this.rawExpr);
    }

    protected listComponent:Array<ExprCom> = new Array<ExprCom>();

    private parse(rawExpr:string): Array<ExprCom>{
        let component = new Array<ExprCom>();

        return component;
    }
}