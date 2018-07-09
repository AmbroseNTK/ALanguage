import ExprComponent from '../ExprComponent';
import IParser from '../Interfaces/IParser';
import IndexedList from '../utils/IndexedList';

export default class NumberParser implements IParser {
    public parse(text: string, list: IndexedList): string {
        let regex = /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/gm;
        let matches = text.match(regex);
        if (matches != null) {
            
        }
        return text;
    }
}