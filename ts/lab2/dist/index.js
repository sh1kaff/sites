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
