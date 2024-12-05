import { Transport } from "./vehicle.js";
import { VehicleStorage } from "./vehiclestorage.js";
import { IDTypes, bodyTypes, carClasses } from "./enums.js";
import { Owner } from "./owner.js";

import Car = Transport.Car;
import Motorbike = Transport.Motorbike;

let owner1: Owner = new Owner("Alex", "Coolel", "Levanovich", new Date, IDTypes.PASSPORT, 876456, 1232);
let owner2: Owner = new Owner("Sergey", "Aavo", "Pipovich", new Date, IDTypes.PASSPORT, 222321, 5566);
let owner3: Owner = new Owner("Maron", "Bendi", "Viktorovich", new Date, IDTypes.PASSPORT, 987222, 8967);
let owner4: Owner = new Owner("Viktor", "Cilia", "Pipihovich", new Date, IDTypes.PASSPORT, 114456, 1772);
let owner5: Owner = new Owner("Mira", "Avrora", "Venovna", new Date, IDTypes.PASSPORT, 248691, 5566);
let owner6: Owner = new Owner("Vika", "Dedlock", "Salatovna", new Date, IDTypes.PASSPORT, 333222, 5464);

let car1: Car = new Car("Audi", "RS6", new Date(), "nfvjrmdbf3k4n76dh", "a222ye56", bodyTypes.HATCHBACK, carClasses.A, owner1);
let car2: Car = new Car("Lada", "Granta", new Date(), "notnotnotnotnotno", "a444ca156", bodyTypes.SEDAN, carClasses.B, owner2);
let car3: Car = new Car("Honda", "Civic type r", new Date(), "djjnh67grwjdnfuyc", "e111va63", bodyTypes.HATCHBACK, carClasses.C, owner3);
let car4: Car = new Car("Mazda", "cx-5", new Date(), "nfvjr234f3k4n76dh", "a233ye56", bodyTypes.HATCHBACK, carClasses.A, owner4);
let car5: Car = new Car("bmw", "banan", new Date(), "notnotnotnot888no", "o001oo01", bodyTypes.SEDAN, carClasses.B, owner5);
let car6: Car = new Car("Zikr", "9 pro plus extra", new Date(), "djjn123grwjdnfuyc", "r111sk01", bodyTypes.HATCHBACK, carClasses.C, owner6);

let mb: Motorbike = new Motorbike("Yaga", "222", new Date, "asd", "asd", "Topovaya", true, owner1);

let vehicleStorage: VehicleStorage<Car> = new VehicleStorage<Car>([car1, car2, car3, car4, car5, car6]);

console.log(vehicleStorage.sortByOwnerSurname());

console.log(vehicleStorage.getAllVehicleOwnerSurnameStartsWith("a"));

console.log(mb.getMotorbikeInfo());