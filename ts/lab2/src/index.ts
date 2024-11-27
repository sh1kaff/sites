// Одномерный массив
// Реализовать метод, возвращающий среднее арифметическое, получаемое из массива целых чисел

const avg = (array: number[]): number => {
    let result: number = 0;

    for (let n of array) {
        result += n;
    }

    return result / array.length;
}

// Двумерный массив
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

// Кортеж
// Создайте кортеж, который может содержать только 3 строковых значения. Реализуйте метод, возвращающий конкатенацию этих строковых значений.


type strCortege = readonly [string, string, string];

const concat = (cortege: strCortege): string => {
    let result: string = "";

    for (let str of cortege) {
        result += str;
    }

    return result;
};


// Перечисление
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

// Вывод

console.log( avg([2, 2, 2]) );

const array2D: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log( countInterval(array2D, [1, 3]) );

const cortege: strCortege = ["Alex", "Smith", "Jr"];
console.log( concat(cortege) );

console.log(edibleVegetableOils.COCONUT);