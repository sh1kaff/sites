interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    birthday: Date;
    ID: IDTypes;
    ser: number;
    num: number;
    printInfo(): void;
}



class Owner implements IOwner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthday: Date;
    private _ID: IDTypes;
    private _ser: number;
    private _num: number;

    constructor(surname: string, name: string, patronymic: string, birthday: Date, ID: IDTypes, ser: number, num: number) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.ID = ID;
        this.ser = ser;
        this.num = num;
    }

    get surname() {
        return this._surname;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get patronymic() {
        return this._patronymic;
    }

    set patronymic(patronymic: string) {
        this._patronymic = patronymic;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(birthday: Date) {
        this._birthday = birthday;
    }

    get ID() {
        return this._ID;
    }

    set ID(ID: IDTypes) {
        this._ID = ID;
    }

    get ser() {
        return this._ser;
    }

    set ser(ser: number) {
        this._ser = ser;
    }

    get num() {
        return this._num;
    }

    set num(num: number) {
        this._num = num;
    }


    printInfo(): void {
        console.log(
            `
            Surname: ${this.surname}
            Name: ${this.name}
            Patronymic: ${this.patronymic}
            Birthday: ${this.birthday.toLocaleDateString("en-US")}
            ID: ${this.ID}
            Series: ${this.ser}
            Number: ${this.num}
            `
        );
    }
}