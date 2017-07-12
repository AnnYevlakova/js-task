;(function() {
    const library = {};
  
    library.forEach = function(arr,callback) {
        if(callback == undefined) {
            callback = arr;
            arr = this;
        }
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };
  
    library.filter = function(arr,callback) {
        if(callback == undefined) {
            callback = arr;
            arr = this;
        }
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if(callback(arr[i], i, arr)) {
              newArr.push(arr[i]);
            }
        }
        if(arr.take != undefined) {
            library.chain(newArr);
        }
        return newArr;
    };
  
    library.reduce = function(arr, callback) {
        if(callback == undefined) {
            callback = arr;
            arr = this;
        }
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr); 
        }     
        return result;
    };
  
    library.map = function(arr, callback) {
        if(callback == undefined) {
            callback = arr;
            arr = this;
        }
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i], i, arr));
        }
        if(arr.take != undefined) {
            library.chain(newArr);
        }
        return newArr;
    };
  
    library.take = function(arr, n) {
        if(n == undefined) {
            n = arr;
            arr = this;
        }
        let newArr = arr.slice(0,n);
        if(arr.take != undefined) {
            library.chain(newArr);
        }
        return newArr;
    };
  
    library.skipe = function(arr, n) {
        if(n == undefined) {
            n = arr;
            arr = this;
        }
        arr.splice(n,1);
        return arr;
    };
  
    library.chain = function(a) {
        a.take = this.take;
        a.skipe = this.skipe;
        a.map = this.map;
        a.reduce = this.reduce;
        a.filter = this.filter;
        a.forEach = this.forEach;
        return a;
    }
  
    window.lib = library;
}());