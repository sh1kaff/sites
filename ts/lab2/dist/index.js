// Одномерный массив
// Реализовать метод, возвращающий среднее арифметическое, получаемое из массива целых чисел
const avg = (array) => {
    let result = 0;
    for (let n of array) {
        result += n;
    }
    return result / array.length;
};
const countInterval = (array, interval) => {
    if (interval[0] - interval[1] > 0) {
        return 0;
    }
    let count = 0;
    for (let line of array) {
        for (let elem of line) {
            if (elem >= interval[0] && elem <= interval[1]) {
                ++count;
            }
        }
    }
    return count;
};
const concat = (cortege) => {
    let result = "";
    for (let str of cortege) {
        result += str;
    }
    return result;
};
// Перечисление
// Создайте тип перечисление для типов пищевых растительных масел (рапсовое, подсолнечное и т.д.). Выведите какой-либо тип масла в консоль.
var edibleVegetableOils;
(function (edibleVegetableOils) {
    edibleVegetableOils["COCONUT"] = "Coconut oil";
    edibleVegetableOils["CORN"] = "Corn oil";
    edibleVegetableOils["COTTONSEED"] = "Cottonseed oil";
    edibleVegetableOils["OLIVE"] = "Olive oil";
    edibleVegetableOils["PALM"] = "Palm oil";
    edibleVegetableOils["PEANUT"] = "Peanut oil";
    edibleVegetableOils["RAPESEED"] = "Rapeseed oil";
    edibleVegetableOils["SAFFLOWER"] = "Safflower oil";
    edibleVegetableOils["SESAME"] = "Sesame oil";
    edibleVegetableOils["SOYBEAN"] = "Soybean oil";
    edibleVegetableOils["SUNFLOWER"] = "Sunflower oil";
})(edibleVegetableOils || (edibleVegetableOils = {}));
/*
    Реализуйте метод, который будет выводить информацию в
    консоль о создаваемом объекте типа Cat или Dog, применяя
    Обобщенный тип, ограниченный типом Pet.
*/
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printInfo(pet) {
    console.log(`Name: ${pet.name}`);
    if ("label" in pet) {
        console.log(`Label: ${pet.label}`);
    }
    console.log(`Age: ${pet.age}`);
    pet.speak();
}
// Вывод
console.log(avg([2, 2, 2]));
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(countInterval(array2D, [1, 3]));
const cortege = ["Alex", "Smith", "Jr"];
console.log(concat(cortege));
console.log(edibleVegetableOils.COCONUT);
const dog = new Dog;
const cat = new Cat;
printInfo(dog);
printInfo(cat);
