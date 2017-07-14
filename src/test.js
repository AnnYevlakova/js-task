import {library} from './lib';

console.log(library.chain([1,2,3,7,6]).addSum(0,3).value());
console.log(library.addSum([1,2,3,7,6],0,3));

