
import IndexedList from '../utils/IndexedList';
import { expect } from 'chai';

describe("Indexed List", () => {
    let indexedList = new IndexedList();
    indexedList.add(2, "World", false);
    indexedList.add(1, "Hello", false);

    it("Add element in correctly order", () => {
        let result = false;
        if (indexedList.getList().length == 2) {
            result = indexedList.getList()[0] == "Hello" && indexedList.getList()[1] == "World";
        }
        expect(result).to.equal(true);
    });

    it("Get element by its position",()=>{
        let result = false;
        let element = indexedList.get(2);
        result = element!=null && element == "World";

        expect(result).to.equal(true);
    });

    it("Delete element by its position",()=>{
        let result = false;
        indexedList.delete(1);
        result = indexedList.getList().length==1 && indexedList.getList()[0] == "World";
    })

});