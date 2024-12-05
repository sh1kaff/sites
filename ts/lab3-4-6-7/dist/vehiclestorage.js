export class VehicleStorage {
    constructor(data) {
        this.creationDate = new Date();
        this.data = data;
    }
    get creationDate() {
        return this._creationDate;
    }
    set creationDate(creationDate) {
        this._creationDate = creationDate;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    getData() {
        return this.data;
    }
    sortByOwnerSurname() {
        return this.data.sort((v1, v2) => v1.owner.surname.toLowerCase().localeCompare(v2.owner.surname.toLowerCase()));
    }
    getAllVehicleOwnerSurnameStartsWith(start) {
        let resultArray = [];
        for (let v of this._data) {
            if (v.owner.surname.toLowerCase().startsWith(start.toLowerCase())) {
                resultArray.push(v);
            }
        }
        return resultArray;
    }
}
