;(function() {
    const library = {};
  
    library.forEach = function(arr,callback) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };
  
    library.filter = function(arr,callback) {
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
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr); 
        }     
        return result;
    };
  
    library.map = function(arr, callback) {
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
        let newArr = arr.slice(0,n);
        if(arr.take != undefined) {
            library.chain(newArr);
        }
        return newArr;
    };
  
    library.skip = function(arr, n) {
        arr.splice(n,1);
        return arr;
    };
  
    library.chain = function(arr) {
        arr.take = this.take.bind(null, arr);
        arr.skip = this.skip.bind(null, arr);
        arr.map = this.map.bind(null, arr);
        arr.reduce = this.reduce.bind(null, arr);
        arr.filter = this.filter.bind(null, arr);
        arr.forEach = this.forEach.bind(null, arr);
        arr.value = function() {
        if(this.take == undefined){
          return;
        }
        delete this.take;
        delete this.skip;
        delete this.map;
        delete this.reduce;
        delete this.filter;
        delete this.forEach;
        delete this.value;
        return this;
    }
        
        return arr;
    }
    library.value = function() {
        if(this.take == undefined){
          return;
        }
        delete this.take;
        delete this.skip;
        delete this.map;
        delete this.reduce;
        delete this.filter;
        delete this.forEach;
        return this;
    }
    
    window.lib = library;
}());