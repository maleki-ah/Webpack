//? Modular Programming

//? Style [1]
// import Service, { v1, v2, display } from './data'; //? Specific import

// console.log(v1);
// console.log(v2);
// display('message');

// let s1: Service = new Service();

//? Style [2]
// import * as Data from './data'; //? General import

// console.log(Data.v1);
// console.log(Data.v2);
// Data.display('message');

// let s2: Data.default = new Data.default();

//? Style [3]
import { v1 as ov1 } from './other-data'; //? Ambiguous import
import Service, { v1 as dv1, v2, display } from './data'

console.log(ov1);
console.log(v2);
console.log(dv1);
display('message');

let s3: Service = new Service();