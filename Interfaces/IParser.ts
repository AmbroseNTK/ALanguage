import IndexedList from '../utils/IndexedList';

export default interface IParser{
    parse(text:string, components:IndexedList):string;
}