declare const sum: (a: number, b: number, c: number) => number;
declare const bool: boolean;
declare let num: number;
declare const bi: bigint;
declare let str: string;
declare const some: any;
declare let func: (a: number, b: number, c: number) => number;
declare const id: number | string;
declare let obj: {
    name: string;
    age?: number;
};
interface Entity {
    id: number;
}
interface toJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
declare const data: toJsonStringify;
declare const jsonString: string;
