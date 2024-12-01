import { IDTypes } from "./enums";
export interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthday: Date;
    ID: IDTypes;
    ser: number;
    num: number;
    printInfo(): void;
}
export declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _patronymic;
    private _birthday;
    private _ID;
    private _ser;
    private _num;
    constructor(surname: string, name: string, patronymic: string, birthday: Date, ID: IDTypes, ser: number, num: number);
    get surname(): string;
    set surname(surname: string);
    get name(): string;
    set name(name: string);
    get patronymic(): string;
    set patronymic(patronymic: string);
    get birthday(): Date;
    set birthday(birthday: Date);
    get ID(): IDTypes;
    set ID(ID: IDTypes);
    get ser(): number;
    set ser(ser: number);
    get num(): number;
    set num(num: number);
    printInfo(): void;
}
