import { Transport } from "./vehicle.js";
import { VehicleStorage } from "./vehiclestorage.js";
import { IDTypes, bodyTypes, carClasses } from "./enums.js";
import { Owner } from "./owner.js";

import Vehicle = Transport.Vehicle;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;

let owner: Owner = new Owner("Alex", "Smith", "Jr", new Date, IDTypes.PASSPORT, 876456, 1232);

let vehicle: Vehicle = new Vehicle("Lada", "2210", new Date(), "3hdb37fhsbfh3bdbrh", "e168va56", owner);

let car: Car = new Car("Audi", "RS6", new Date(), "notvalid", "notvalid", bodyTypes.HATCHBACK, carClasses.B, owner);
let car_2: Car = new Car("Lada", "Granta", new Date(), "notvalid", "notvalid", bodyTypes.SEDAN, carClasses.B, owner);
let car_3: Car = new Car("Honda", "Civic type r", new Date(), "notvalid", "notvalid", bodyTypes.HATCHBACK, carClasses.B, owner);

let motorbike: Motorbike = new Motorbike("Yamaha", "228", new Date(), "1234567890qwerty", "a228ye228", "Hard", true, owner);

let vehicleStorage: VehicleStorage<Car> = new VehicleStorage<Car>([car, car_2, car_3]);

console.log(JSON.stringify(owner));
console.log(JSON.stringify(vehicle));
console.log(JSON.stringify(car));
console.log(JSON.stringify(motorbike));

owner.printInfo();
vehicle.printInfo();
car.printInfo();
motorbike.printInfo();

console.log(JSON.stringify(vehicleStorage));

Object.defineProperty(
    vehicle,
    "nowItsMyCar",
    {value: true}
);
