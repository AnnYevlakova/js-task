import {library} from './lib';

console.log(library.chain([1,2,3]).take(1));
console.log(library.chain([1,2,3,7,6]).take(2).forEach(n=>n-2).skip(1).map(n => n + 2).value());
