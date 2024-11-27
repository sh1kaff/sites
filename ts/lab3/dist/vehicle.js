class Vehicle {
    constructor(make, model, yearIssue, VIN, regNum, owner) {
        this.make = make;
        this.model = model;
        this.yearIssue = yearIssue;
        this.VIN = VIN;
        this.regNum = regNum;
        this.owner = owner;
    }
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get yearIssue() {
        return this._yearIssue;
    }
    set yearIssue(yearIssue) {
        this._yearIssue = yearIssue;
    }
    get VIN() {
        return this._VIN;
    }
    set VIN(VIN) {
        if (VIN.length != 17) {
            this._VIN = "0".repeat(17);
        }
        else {
            this._VIN = VIN;
        }
    }
    get regNum() {
        return this._regNum;
    }
    set regNum(regNum) {
        const exp = /^[a-z]\d\d\d[a-z]{2}\d{1,3}$/i;
        if (exp.test(regNum)) {
            this._regNum = regNum;
        }
        else {
            this._regNum = "a000aa000";
        }
    }
    get owner() {
        return this._owner;
    }
    set owner(owner) {
        this._owner = owner;
    }
    printInfo() {
        console.log(`
            Make: ${this.make}
            Model: ${this.model}
            Year of issue: ${this.yearIssue.getFullYear()}
            VIN: ${this.VIN}
            Registration Number: ${this.regNum}
            `);
    }
}
class Motorbike extends Vehicle {
    constructor(make, model, yearIssue, VIN, regNum, frameType, forSports, owner) {
        super(make, model, yearIssue, VIN, regNum, owner);
        this.frameType = frameType;
        this.forSports = forSports;
    }
    get frameType() {
        return this._frameType;
    }
    set frameType(frameType) {
        this._frameType = frameType;
    }
    get forSports() {
        return this._forSports;
    }
    set forSports(forSports) {
        this._forSports = forSports;
    }
    printInfo() {
        super.printInfo();
        console.log(`
            Frame type: ${this.frameType}
            For sports: ${(this.forSports) ? "yes" : "no"}
            `);
    }
}
class Car extends Vehicle {
    constructor(make, model, yearIssue, VIN, regNum, bodyType, carClass, owner) {
        super(make, model, yearIssue, VIN, regNum, owner);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    get bodyType() {
        return this._bodyType;
    }
    set bodyType(bodyType) {
        this._bodyType = bodyType;
    }
    get carClass() {
        return this._carClass;
    }
    set carClass(carClass) {
        this._carClass = carClass;
    }
    printInfo() {
        super.printInfo();
        console.log(`
            Body type: ${this.bodyType}
            Car class: ${this.carClass}
            `);
    }
}
