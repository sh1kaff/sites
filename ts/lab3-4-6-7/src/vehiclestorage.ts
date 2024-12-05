import { Transport } from "./vehicle.js";

interface IVehicleStorage<T extends Transport.Vehicle> {
    creationDate: Date;
    data: T[];
    getData(): T[];
    sortByOwnerSurname(): T[];
    getAllVehicleOwnerSurnameStartsWith(start: string): T[];
}

export class VehicleStorage<T extends Transport.Vehicle> implements IVehicleStorage<T> {
    private _creationDate: Date;
    private _data: T[];
    
    constructor(data: T[]) {
        this.creationDate = new Date();
        this.data = data;
    }

    get creationDate() {
        return this._creationDate;
    }

    set creationDate(creationDate: Date) {
        this._creationDate = creationDate;
    }

    get data() {
        return this._data;
    }

    set data(data: T[]) {
        this._data = data;
    }
    
    getData(): T[] {
        return this.data;
    }

    sortByOwnerSurname(): T[] {
        return this.data.sort( (v1: T, v2: T) => v1.owner.surname.toLowerCase().localeCompare(v2.owner.surname.toLowerCase()) );
    }

    getAllVehicleOwnerSurnameStartsWith(start: string): T[] {
        let resultArray: T[] = [];

        for (let v of this._data) {
            if ( v.owner.surname.toLowerCase().startsWith(start.toLowerCase()) ) {
                resultArray.push(v);
            }
        }

        return resultArray;
    }
}