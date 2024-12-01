import { IOwner } from "./owner.js";
import { bodyTypes, carClasses } from "./enums.js";
export declare namespace Transport {
    interface IVehicle {
        make: string;
        model: string;
        yearIssue: Date;
        VIN: string;
        regNum: string;
        owner: IOwner;
        printInfo(): void;
    }
    interface ICar extends IVehicle {
        bodyType: bodyTypes;
        carClass: carClasses;
    }
    interface IMotorbike extends IVehicle {
        frameType: string;
        forSports: boolean;
    }
    class Vehicle implements IVehicle {
        private _make;
        private _model;
        private _yearIssue;
        private _VIN;
        private _regNum;
        private _owner;
        constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, owner: IOwner);
        get make(): string;
        set make(make: string);
        get model(): string;
        set model(model: string);
        get yearIssue(): Date;
        set yearIssue(yearIssue: Date);
        get VIN(): string;
        set VIN(VIN: string);
        get regNum(): string;
        set regNum(regNum: string);
        get owner(): IOwner;
        set owner(owner: IOwner);
        printInfo(): void;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _frameType;
        private _forSports;
        constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, frameType: string, forSports: boolean, owner: IOwner);
        get frameType(): string;
        set frameType(frameType: string);
        get forSports(): boolean;
        set forSports(forSports: boolean);
        printInfo(): void;
    }
    class Car extends Vehicle implements ICar {
        private _bodyType;
        private _carClass;
        constructor(make: string, model: string, yearIssue: Date, VIN: string, regNum: string, bodyType: bodyTypes, carClass: carClasses, owner: IOwner);
        get bodyType(): bodyTypes;
        set bodyType(bodyType: bodyTypes);
        get carClass(): carClasses;
        set carClass(carClass: carClasses);
        printInfo(): void;
    }
}
