import IParser from '../Interfaces/IParser';
import IndexedList from '../utils/IndexedList';
import Text from '../Operands/Text';

export default class StringParser implements IParser {
    
    public parse(text: string, list: IndexedList):string {
        
        let regex = /(["'])(?:(?=(\\?))\2.)*?\1/gm;

        let matches = text.match(regex);
        if (matches != null) {
            for (let i = 0; i < matches.length; i++) {
                let pos = text.search(matches[i]);
                list.add(pos, new Text(matches[i].substring(1,matches[i].length-1)));
                let pseudoStr = this.createPseudoString(matches[i].length);
                text = text.replace(matches[i],pseudoStr);
            }
        }
        return text;
    }

    private createPseudoString(len: number): string {
        let result = "";
        for (let i = 0; i < len; i++) {
            result += String.fromCharCode(205);
        }
        return result;
    }
}