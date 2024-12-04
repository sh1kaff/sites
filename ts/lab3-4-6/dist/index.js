import { Transport } from "./vehicle.js";
import { VehicleStorage } from "./vehiclestorage.js";
import { IDTypes, bodyTypes, carClasses } from "./enums.js";
import { Owner } from "./owner.js";
var Vehicle = Transport.Vehicle;
var Car = Transport.Car;
var Motorbike = Transport.Motorbike;
let owner = new Owner("Alex", "Smith", "Jr", new Date, IDTypes.PASSPORT, 876456, 1232);
let vehicle = new Vehicle("Lada", "2210", new Date(), "3hdb37fhsbfh3bdbr", "e168va56", owner);
let car = new Car("Audi", "RS6", new Date(), "notvalid", "notvalid", bodyTypes.HATCHBACK, carClasses.B, owner);
let car_2 = new Car("Lada", "Granta", new Date(), "notvalid", "notvalid", bodyTypes.SEDAN, carClasses.B, owner);
let car_3 = new Car("Honda", "Civic type r", new Date(), "notvalid", "notvalid", bodyTypes.HATCHBACK, carClasses.B, owner);
let motorbike = new Motorbike("Yamaha", "228", new Date(), "1234567890qwertyw", "a228ye228", "Hard", true, owner);
let vehicleStorage = new VehicleStorage([car, car_2, car_3]);
console.log(JSON.stringify(owner));
console.log(JSON.stringify(vehicle));
console.log(JSON.stringify(car));
console.log(JSON.stringify(motorbike));
owner.printInfo();
vehicle.printInfo();
car.printInfo();
motorbike.printInfo();
console.log(JSON.stringify(vehicleStorage));
// Object.defineProperty(
//     Vehicle,
//     "nowItsMyCar",
//     {value: true}
// );
console.log(vehicle.VIN);
