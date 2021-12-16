export default class TransactionModel {
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get date_1(): Date {
        return this._date;
    }
    public set date_1(value: Date) {
        this._date = value;
    }
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }
    public get imageDTO(): String {
        return this._imageDTO;
    }
    public set imageDTO(value: String) {
        this._imageDTO = value;
    }
    public get categoryId(): number {
        return this._categoryId;
    }
    public set categoryId(value: number) {
        this._categoryId = value;
    }


    constructor(private _categoryId: number, private _imageDTO: String, private _date: Date, private _price: number, private _description: string, private _id: number) {

    }

}