export default class Category {
    public get count(): number {
        return this._count;
    }
    public set count(value: number) {
        this._count = value;
    }
    public get avg(): number {
        return this._avg;
    }
    public set avg(value: number) {
        this._avg = value;
    }
    public get sum(): number {
        return this._sum;
    }
    public set sum(value: number) {
        this._sum = value;
    }
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    constructor(private _id: number, private _userId: number, private _type: string, private _name: string, private _icon: string, private _sum: number, private _avg: number, private _count: number) {}
}