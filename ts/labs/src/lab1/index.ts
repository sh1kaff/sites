const sum = (a: number, b: number, c: number): number => {
    return a + b + c;
}

const bool: boolean = true;
let num: number = 999;
const bi: bigint = BigInt(100);
let str: string = "text";
const some: any = 111;
let func: (a: number, b: number, c: number) => number = sum;
const id: number | string = 1;
let obj: {name: string, age?: number} = {name: "Alex", age: 25};

interface Entity {
    id: number;
}

interface toJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}

const data: toJsonStringify = {
    id: 3,
    e1: 999,
    e2: "field"
}

const jsonString: string = JSON.stringify(data);

console.log(sum(1,2,3));

console.log(bool);
console.log(num);
console.log(bi);
console.log(str);
console.log(some);
console.log(func);
console.log(id);
console.log(obj);

console.log(data);
console.log(jsonString);