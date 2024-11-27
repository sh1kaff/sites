declare const avg: (array: number[]) => number;
type interval_t = [from: number, to: number];
declare const countInterval: (array: number[][], interval: interval_t) => number;
type strCortege = readonly [string, string, string];
declare const concat: (cortege: strCortege) => string;
declare enum edibleVegetableOils {
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
declare const array2D: number[][];
declare const cortege: strCortege;
