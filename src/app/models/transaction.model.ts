export default class TransactionModel {
    public get categoryId(): number {
        return this._categoryId;
    }
    public set categoryId(value: number) {
        this._categoryId = value;
    }
    public get imageDTO(): Object {
        return this._imageDTO;
    }
    public set imageDTO(value: Object) {
        this._imageDTO = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(private _id: number, private _description: string, private _price: number, private _date: Date, private _imageDTO: Object, private _categoryId: number) {}
}