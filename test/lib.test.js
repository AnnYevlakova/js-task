import {library as lib} from '../src/lib.js';

let array;

beforeEach(function() {
    array = [1,2,3,4,5,6];
});

describe('lib.js', function(){
    it('filter shoud return members greater than 3', function(){
        expect([3,4,5,6]).toEqual(lib.filter(array, n => n >= 3));
    });
    
    it('reduce should return 21', function(){
        expect(21).toEqual(lib.reduce(array, (p, n) => p + n));
    });
    
    it('map should return [-1,0,1,2,3,4]', function(){
        expect([-1,0,1,2,3,4]).toEqual(lib.map(array, (n) => n - 2));
    });
    
    it('take should return the first three members', function(){
        expect([1,2,3]).toEqual(lib.take(array, 3));
    });
    
    it('take should return passed array', function(){
        expect(array).toEqual(lib.take(array, 10));
    });
    
    it('take should return empty array', function(){
        expect([]).toEqual(lib.take(array, 0));
    });
    
    it('skip should return array without member with index 4', function(){
        expect([1,2,3,4,6]).toEqual(lib.skip(array, 4));
    });
    
    it('skip should return empty array', function(){
        expect([]).toEqual(lib.skip([],3));
    });
    
    it('addSum  should return array with new last added index wich is the sum of array members', function(){
        expect([1,2,3,4,5,6,6]).toEqual(lib.addSum(array,0,3));
    });
    
    it('average should return average value of array members', function(){
        expect(3.5).toEqual(lib.average(array));
    });
});

describe('lib.js', function(){
    it ("memoize should be called only once", function(){
        spyOn(lib, "memoize").and.callThrough();
        lib.average([2,4]);
        lib.average([2,4]);  
        expect(lib.memoize.calls.count()).toEqual(1);      
    });
});