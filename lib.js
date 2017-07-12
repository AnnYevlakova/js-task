;(function() {
    let library = {};
    library.filter = function(arr,callback) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof callback != 'function') {
            throw new TypeError(`${callback} is not a function`);
        }
        return arr.filter(callback);
    };
    library.forEach = function(arr,callback) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof callback != 'function') {
            throw new TypeError(`${callback} is not a function`);
        }
        arr.forEach(callback);
    };
    library.reduce = function(arr, callback) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof callback != 'function') {
            throw new TypeError(`${callback} is not a function`);
        }
        return arr.reduce(callback);
    };
    library.map = function(arr, callback) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof callback != 'function') {
            throw new TypeError(`${callback} is not a function`);
        }
        return arr.map(callback);
    };
    library.take = function(arr, n) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof n != 'number') {
            throw new TypeError(`${n} is not a number`);
        }
        return arr[n];
    };
    library.skipe = function(arr, n) {
        if({}.toString.call(arr) != '[object Array]') {
            throw new Error(`${arr} is not an array`);
        }
        if(typeof n != 'number') {
            throw new TypeError(`${n} is not a number`);
        }
        arr.splice(n,1);
        return arr;
    };
    window.lib = library;
}());