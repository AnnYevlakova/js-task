export const library = {};
let memorise = setMemo();

function setMemo() {
    const cache = {};
    
    return function(name, args, result) {
        const index = JSON.stringify(args);
        
        if (result == undefined){
            if(cache[name] != undefined && index in cache[name]) {
                return cache[name][index];
            }
        } else {
            if (cache[name] == undefined) {
                cache[name] = {};
            } 
            cache[name][index] = result;
            
            return;
        }
        
        return false;
    };
}

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
    let result = arr[0];
    
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

library.addSum = function(arr, start, end) {
    const memo = memorise('addSum', arguments);
    let result = arr[start];
    const newArr = [...arr];
    
    if(memo) {
        return memo;
    } 
    for(let i = start+1; i < end; i++){
        result += newArr[i];
    }
    newArr.push(result);
    memorise('addSum', arguments, newArr);
    
    return newArr;
};

library.average = function(arr) {
    const memo = memorise('average', arguments);
        
    if(memo) {
        return memo;
    }
    const result = library.reduce(arr, (prev, next) => prev + next) / arr.length;
    
    memorise('average', arguments, result);
    
    return result;
        
};

library.chain = function(arr) {
    function wrapChain(method) {
        
        return function(...n){
            newLib._value = method.apply(library, [newLib._value, ...n]);
            
            return newLib;
        }
    }
    
    const newLib = {
        _value: arr,
        take: wrapChain(library.take),
        skip: wrapChain(library.skip),
        map: wrapChain(library.map),
        reduce: wrapChain(library.reduce),
        filter: wrapChain(library.filter),
        addSum: wrapChain(library.addSum),
        average: wrapChain(library.average),
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
