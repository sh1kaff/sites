import { IOwner } from "./owner.js";
import { bodyTypes, carClasses } from "./enums.js";
import { seal } from "./decor.js";

export namespace Transport {

export interface IVehicle {
    make: string;
    model: string;
    yearIssue: Date;
    VIN: string;
    regNum: string;
    owner: IOwner;
    printInfo(): void;
}

export interface ICar extends IVehicle {
    bodyType: bodyTypes;
    carClass: carClasses;
}

export interface IMotorbike extends IVehicle {
    frameType: string;
    forSports: boolean;
}

@seal
export class Vehicle implements IVehicle {
    private _make: string;
    private _model: string;
    private _yearIssue: Date;
    private _VIN: string;
    private _regNum: string;
    private _owner: IOwner;

    constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, owner: IOwner) {
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

    set make(make: string) {
        this._make = make;
    }

    get model() {
        return this._model;
    }

    set model(model: string) {
        this._model = model;
    }

    get yearIssue() {
        return this._yearIssue;
    }

    set yearIssue(yearIssue: Date) {
        this._yearIssue = yearIssue;
    }

    get VIN() {
        return this._VIN;
    }

    set VIN(VIN: string) {
        if (VIN.length != 17) {
            this._VIN = "0".repeat(17);
            return;
        }
        
        this._VIN = VIN;
    }

    get regNum() {
        return this._regNum;
    }

    set regNum(regNum: string) {
        const exp: RegExp = /^[a-z]\d\d\d[a-z]{2}\d{1,3}$/i;
        if ( exp.test(regNum) ) {
            this._regNum = regNum;
            return;
        }
        
        this._regNum = "a000aa000";
    }

    get owner() {
        return this._owner;
    }

    set owner(owner: IOwner) {
        this._owner = owner;
    }

    printInfo() {
        console.log(
            `
            Make: ${this.make}
            Model: ${this.model}
            Year of issue: ${this.yearIssue.getFullYear()}
            VIN: ${this.VIN}
            Registration Number: ${this.regNum}
            `
        );
    }
}


export class Motorbike extends Vehicle implements IMotorbike {
    private _frameType: string;
    private _forSports: boolean;

    constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, frameType: string, forSports: boolean, 
        owner: IOwner) {
        super(make, model, yearIssue, VIN, regNum, owner);
        
        this.frameType = frameType;
        this.forSports = forSports; 
    }

    get frameType() {
        return this._frameType;
    }

    set frameType(frameType: string) {
        this._frameType = frameType;
    }

    get forSports() {
        return this._forSports;
    }

    set forSports(forSports: boolean) {
        this._forSports = forSports;
    }

    printInfo() {
        super.printInfo();
        console.log(
            `
            Frame type: ${this.frameType}
            For sports: ${(this.forSports) ? "yes" : "no"}
            `
        );
    }
}


export class Car extends Vehicle implements ICar {
    private _bodyType: bodyTypes;
    private _carClass: carClasses;

    constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, bodyType: bodyTypes, carClass: carClasses, 
        owner: IOwner) {
        super(make, model, yearIssue, VIN, regNum, owner);
        
        this.bodyType = bodyType;
        this.carClass = carClass; 
    }

    get bodyType() {
        return this._bodyType;
    }

    set bodyType(bodyType: bodyTypes) {
        this._bodyType = bodyType;
    }

    get carClass() {
        return this._carClass;
    }

    set carClass(carClass: carClasses) {
        this._carClass = carClass;
    }

    printInfo() {
        super.printInfo();
        console.log(
            `
            Body type: ${this.bodyType}
            Car class: ${this.carClass}
            `
        );
    }
}

}