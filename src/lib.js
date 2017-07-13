export const library = {};

library.forEach = function(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

library.filter = function(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
};

library.reduce = function(arr, callback) {
    const result = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr); 
    }     
    
    return result;
};

library.map = function(arr, callback) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    
    return newArr;
};

library.take = function(arr, n) {
    const newArr = arr.slice(0,n);
    
    return newArr;
};

library.skip = function(arr, n) {
    arr.splice(n, 1);
    
    return arr;
};

library.chain = function(arr) {
    const newLib = {
        _value: arr,
        take: function(n){
            this._value = library.take.apply(library, [this._value, n]);
            
            return this;
        },
        skip: function(n){
            this._value = library.skip.apply(library, [this._value, n]);
            
            return this;
        },
        map: function(n){
            this._value = library.map.apply(library, [this._value, n]);
            
            return this;
        },
        reduce: function(n){
            this._value = library.reduce.apply(library, [this._value, n]);
            
            return this;
        },
        filter: function(n){
            this._value = library.filter.apply(library, [this._value, n]);
            
            return this;
        },
        forEach: function(n){
            library.forEach.apply(library, [this._value, n]);
            
            return this;
        },
        value: function() {
            return this._value;
        }
    }
    
    return newLib;
    };
