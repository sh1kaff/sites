"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enums = void 0;
var Enums;
(function (Enums) {
    let IDTypes;
    (function (IDTypes) {
        IDTypes["PASSPORT"] = "Passport";
        IDTypes["DRIVER_LICENSE"] = "Driver license";
        IDTypes["BC"] = "Birthday Certificate";
    })(IDTypes = Enums.IDTypes || (Enums.IDTypes = {}));
    let bodyTypes;
    (function (bodyTypes) {
        bodyTypes["MICRO"] = "Micro";
        bodyTypes["SEDAN"] = "Sedan";
        bodyTypes["CUV"] = "Crossover utility vehicle";
        bodyTypes["SUV"] = "Sport utility vehicle";
        bodyTypes["HATCHBACK"] = "Hatchback";
        bodyTypes["MINIVAN"] = "Minivan";
        bodyTypes["CABRIOLET"] = "Cabriolet";
        bodyTypes["COUPE"] = "Coupe";
        bodyTypes["ROADSTER"] = "Roadster";
        bodyTypes["SUPERCAR"] = "Supercar";
        bodyTypes["PICKUP"] = "Pickup";
        bodyTypes["VAN"] = "Van";
        bodyTypes["LIMOUSINE"] = "Limousine";
        bodyTypes["CAMPERVAN"] = "Campervan";
        bodyTypes["TRUCK"] = "Truck";
    })(bodyTypes = Enums.bodyTypes || (Enums.bodyTypes = {}));
    let carClasses;
    (function (carClasses) {
        carClasses[carClasses["A"] = 0] = "A";
        carClasses[carClasses["B"] = 1] = "B";
        carClasses[carClasses["C"] = 2] = "C";
        carClasses[carClasses["D"] = 3] = "D";
        carClasses[carClasses["E"] = 4] = "E";
        carClasses[carClasses["F"] = 5] = "F";
    })(carClasses = Enums.carClasses || (Enums.carClasses = {}));
})(Enums || (exports.Enums = Enums = {}));
