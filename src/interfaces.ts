//? Interface
//? Data, Service

interface DataType1 {
    f1: string;
    f2: number;
}

let dt1: DataType1 = { f1: 'sample', f2: 90 };

//? Nullable and Optional Properties
interface DataType2 {
    f1?: string;
    f2?: number;
}

let dt2: DataType2 = {};

interface DataType3 {
    readonly f1: string;
    readonly f2?: number;
}

let dt3: DataType3 = { f1: 'sample', f2: 75 };
//! dt3.f2 = 90;  ERROR: Readonly Property

//? Delegate
interface MathOperation {
    (n1: number, n2: number): number;
}

function addition(p1: number, p2: number): number {
    return p1 + p2;
}

function multiply(p1: number, p2: number): number {
    return p1 * p2;
}

function division(p1: number, p2: number): number {
    return p1 / p2;
}

let f1: MathOperation = addition;

console.log(f1(10, 20));

const f2: MathOperation = (a: number, b: number) => a - b;

console.log(f2(10, 20));