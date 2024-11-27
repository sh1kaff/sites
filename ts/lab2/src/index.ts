// 1 Одномерный массив
// Реализовать метод, возвращающий среднее арифметическое, получаемое из массива целых чисел

const avg = (array: number[]): number => {
    let result: number = 0;

    for (let n of array) {
        result += n;
    }

    return result / array.length;
}

// 2 Двумерный массив
// Реализовать метод, возвращающий количество значений в матрице целых чисел в заданном интервале

type interval_t = [from: number, to: number];

const countInterval = (array: number[][], interval: interval_t): number => {
    if (interval[0] - interval[1] > 0) {
        return 0;
    }
    
    let count: number = 0;

    for (let line of array) {
        for (let elem of line) {
            if (elem >= interval[0] && elem <= interval[1]) {
                ++count;
            }
        }
    }

    return count;
}

// 3 Кортеж
// Создайте кортеж, который может содержать только 3 строковых значения. Реализуйте метод, возвращающий конкатенацию этих строковых значений.


type strCortege = readonly [string, string, string];

const concat = (cortege: strCortege): string => {
    let result: string = "";

    for (let str of cortege) {
        result += str;
    }

    return result;
};


// 4 Перечисление
// Создайте тип перечисление для типов пищевых растительных масел (рапсовое, подсолнечное и т.д.). Выведите какой-либо тип масла в консоль.

enum edibleVegetableOils {
    COCONUT = "Coconut oil",
    CORN = "Corn oil",
    COTTONSEED = "Cottonseed oil",
    OLIVE = "Olive oil",
    PALM = "Palm oil",
    PEANUT = "Peanut oil",
    RAPESEED = "Rapeseed oil",
    SAFFLOWER = "Safflower oil",
    SESAME = "Sesame oil",
    SOYBEAN = "Soybean oil",
    SUNFLOWER = "Sunflower oil"
}

/*
    5
    Реализуйте метод, который будет выводить информацию в
    консоль о создаваемом объекте типа Cat или Dog, применяя
    Обобщенный тип, ограниченный типом Pet.
*/

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    if ("label" in pet) {
        console.log(`Label: ${pet.label}`);
    }
    console.log(`Age: ${pet.age}`);
    pet.speak();
}

/*
    6
    Создайте тип с применением перечисления из 3го задания (для
    использования его в качестве типа поля, для некоторых случаев
    возможно его использование при реализации массива). Добавьте
    собственные поля стандартных типов, корректно характеризующие ту
    или иную предметную область, совпадающую с вашим типом
    перечисления. Создайте объект на основе вашего типа и выведите его в
    консоль в формате JSON.
*/

interface Scramble {
    cookTime: number;
    oil: edibleVegetableOils;
    eggType: string;
}

// Вывод

// 1
console.log( avg([2, 2, 2]) );

// 2
const array2D: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log( countInterval(array2D, [1, 3]) );

// 3
const cortege: strCortege = ["Alex", "Smith", "Jr"];
console.log( concat(cortege) );

// 4
console.log(edibleVegetableOils.COCONUT);

// 5
const dog: Dog = new Dog;
const cat: Cat = new Cat;
printInfo(dog);
printInfo(cat);

// 6
const scramble: Scramble = {
    cookTime: 20,
    oil: edibleVegetableOils.CORN,
    eggType: "C0"
};
console.log( JSON.stringify(scramble) );