;(function() {
    let library = {};
    library.forEach = function(arr,callback) {
        for (let i= 0; i <arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };
    library.filter = function(arr,callback) {
        let newArr = [];
        for (let i= 0; i <arr.length; i++) {
            if(callback(arr[i], i, arr)) {
              newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    library.reduce = function(arr, callback) {
        let result = arr[0];
        for (let i= 1; i <arr.length; i++) {
            result = callback(result, arr[i], i, arr); 
        }     
        return result;
    };
    library.map = function(arr, callback) {
      let newArr = [];
        for (let i= 0; i <arr.length; i++) {
            newArr.push(callback(arr[i], i, arr));
        }
      return newArr;
    };
    library.take = function(arr, n) {
        return arr[n];
    };
    library.skipe = function(arr, n) {
        arr.splice(n,1);
        return arr;
    };
    window.lib = library;
}());