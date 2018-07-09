
class IndexedListElement {
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _element: any;
    public get element(): any {
        return this._element;
    }
    public set element(value: any) {
        this._element = value;
    }

    constructor(id: number, element: any) {
        this.id = id;
        this.element = element;
    }
}

export default class IndexedList {
    private list!: Array<IndexedListElement>;

    constructor() {
        this.list = new Array<IndexedListElement>();
    }

    public add(pos: number, element: any, replaceDupPos = true): void {
        let existed = this.list.filter((value, index, array) => {
            return value.id == pos;
        });
        if (existed.length != 0) {
            if (replaceDupPos) {
                existed[0].element = element;
                return;
            }
        }

        this.list.push(new IndexedListElement(pos, element));
        this.list.sort((a: IndexedListElement, b: IndexedListElement) => {
            if (a.id > b.id)
                return 1;
            else if (a.id < b.id)
                return -1;
            else
                return 0;
        });
    }

    public get(pos: number): any {
        let existed = this.list.filter((value, index, array) => {
            return value.id == pos;
        });
        if (existed.length != 0) {
            return existed[0].element;
        }
        return null;
    }

    public delete(pos: number): void {
        this.list = this.list.filter((value,index,array)=>{
            return value.id != pos;
        });
    }

    public getList():Array<any>{
        let result = new Array<any>();
        this.list.forEach(element => {
            result.push(element.element);
        });
        return result;
    }

}