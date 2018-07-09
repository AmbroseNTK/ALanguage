import ExprComponent, { ComponentType } from '../ExprComponent';
import IComponent from '../Interfaces/IComponent';

export default class Text extends ExprComponent implements IComponent{
    constructor(text:string){
        super("Text",ComponentType.Text,text);
    }

    public process(args:ExprComponent[]){

    }
}