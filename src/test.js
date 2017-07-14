import {library} from './lib';

console.log(library.chain([1,2,3]).take(1).value());
console.log(library.take([1,2,3],1));

console.log(library.chain([1,2,3,7,6]).map(n => n + 2).value());
console.log(library.map([1,2,3,7,6],n => n + 2));

console.log(library.chain([1,2,3,7,6]).average().value());
console.log(library.average([1,2,3,7,6]));

console.log(library.reduce([1,2,3,7,6], (p,n)=>p+n));
console.log(library.reduce([1,2,3,7,6], (p,n)=>p+n));