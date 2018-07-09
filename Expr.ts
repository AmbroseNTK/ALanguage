import ExprComponent from './ExprComponent';

export default class Expr{

    private _rawExpr: string = "";
    public get rawExpr(): string {
        return this._rawExpr;
    }

    public set rawExpr(value: string) {
        this._rawExpr = value;
        this.listComponent = this.parse(this.rawExpr);
    }

    protected listComponent:Array<ExprComponent> = new Array<ExprComponent>();

    private parse(rawExpr:string): Array<ExprComponent>{
        let component = new Array<ExprComponent>();

        return component;
    }
}