import {library as lib} from '../src/lib.js';

let array;

beforeEach(function() {
    array = [1,2,3,4,5,6];
});

describe('lib.js', function(){
    it('it should return [3,4,5,6]', function(){
        expect([3,4,5,6]).toEqual(lib.filter(array, n => n >= 3));
    });
    
    it('it should return 21', function(){
        expect(21).toEqual(lib.reduce(array, (p, n) => p + n));
    });
    
    it('it should return [-1,0,1,2,3,4]', function(){
        expect([-1,0,1,2,3,4]).toEqual(lib.map(array, (n) => n - 2));
    });
    
    it('it should return [1,2,3]', function(){
        expect([1,2,3]).toEqual(lib.take(array, 3));
    });
    
    it('it should return [1,2,3,4,6]', function(){
        expect([1,2,3,4,6]).toEqual(lib.skip(array, 4));
    });
    
    it('it should return [1,2,3,4,5,6,6]', function(){
        expect([1,2,3,4,5,6,6]).toEqual(lib.addSum(array,0,3));
    });
    
    it('it should return 3.5', function(){
        expect(3.5).toEqual(lib.average(array));
    });
})