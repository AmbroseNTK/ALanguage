import StringParser from '../Parsers/StringParser';
import IndexedList from '../utils/IndexedList';
import { expect } from 'chai';

describe("Text parser", () => {
    let parser = new StringParser();
    it("Get \"Hello\" \"World\" from \"\"Hello\" a b c + - * / \"World\"\"", () => {
        let list: IndexedList = new IndexedList();
        let input = "\"Hello\" a b c + - * / \"World\"";
        input = parser.parse(input, list);
        expect(list.getList().length == 2 && list.getList()[0].value == "Hello" && list.getList()[1].value == "World").to.equal(true);

    })
})