export class Owner {
    constructor(name, surname, patronymic, birthday, ID, ser, num) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.birthday = birthday;
        this.ID = ID;
        this.ser = ser;
        this.num = num;
    }
    get surname() {
        return this._surname;
    }
    set surname(surname) {
        this._surname = surname;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get patronymic() {
        return this._patronymic;
    }
    set patronymic(patronymic) {
        this._patronymic = patronymic;
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(birthday) {
        this._birthday = birthday;
    }
    get ID() {
        return this._ID;
    }
    set ID(ID) {
        this._ID = ID;
    }
    get ser() {
        return this._ser;
    }
    set ser(ser) {
        if (ser < 100000) {
            this._ser = 0;
            return;
        }
        if (ser % 1 !== 0) {
            ser = Math.floor(ser);
        }
        this._ser = ser;
    }
    get num() {
        return this._num;
    }
    set num(num) {
        if (num < 1000) {
            this._num = 0;
            return;
        }
        if (num % 1 !== 0) {
            num = Math.floor(num);
        }
        this._num = num;
    }
    printInfo() {
        console.log(`
            Surname: ${this.surname}
            Name: ${this.name}
            Patronymic: ${this.patronymic}
            Birthday: ${this.birthday.toLocaleDateString("en-US")}
            ID: ${this.ID}
            Series: ${this.ser}
            Number: ${this.num}
            `);
    }
}
