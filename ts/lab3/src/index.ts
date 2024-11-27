enum IDTypes {
    PASSPORT,
    DRIVER_LICENSE,
    BC
}

interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    birthday: Date;
    ID: IDTypes;
    ser: number;
    num: number;
    printInfo(): void;
}

interface Vehicle {
    make: string;
    model: string;
    yearIssue: Date;
    VIN: string;
    regNum: string;
    owner: Owner;
    printInfo(): void;
}