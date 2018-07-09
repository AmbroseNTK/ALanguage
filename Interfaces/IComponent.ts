import ExprComponent from "../ExprComponent";

export default interface IComponent{
    process(args:Array<ExprComponent>):void;
}