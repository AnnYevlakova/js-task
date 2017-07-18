export const library = {};

const addMemo = function(method) {
	const cache = {};

	return function(...args) {
		const index = JSON.stringify(args[0]);

		if (!(cache[method] !== undefined && index in cache[method])){
			const result = library.memoize(method,args);

			if (cache[method] === undefined) {
				cache[method] = {};
			}
			cache[method][index] = result;

			return result;
		} else {
			cache[method][index] = result;

			return result;
		}
	};
};

library.memoize = function(method, args){
	return method.apply(null, args);
};

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
	const newArr = arr.slice(0, n);

	return newArr;
};

library.skip = function(arr, n) {
	arr.splice(n, 1);
    
	return arr;
};

library.addSum = addMemo ('addSum');

function addSum (arr, start, end) {
	let result = arr[start];

	for(let i = start+1; i < end; i++){
		result += arr[i];
	}
	arr.push(result);

	return arr;
}

library.average = addMemo('average');

function average (arr) {
	const result = library.reduce(arr, (prev, next) => prev + next) / arr.length;
        
	return result;
}

library.chain = function(arr) {
	function wrapChain(method) {
        
		return function(...n){
			newLib._value = method.apply(library, [newLib._value, ...n]);
            
			return newLib;
		};
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
	};
    
	return newLib;
};