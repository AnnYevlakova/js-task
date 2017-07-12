console.log(lib.filter([2,4,5,1],(a)=>{
  return a>3;
}));
lib.forEach([2,4,5,1],(a)=>{
  alert(a);
});
console.log(lib.reduce([2,4,5,1], (a,b)=>{
  return a+b;
}));

console.log(lib.map([2,4,5,1], (a)=>{
  return a+1;
}));
console.log(lib.take([2,4,5,1],2));
console.log(lib.skipe([2,4,5,1],3));
console.log(lib.chain([2,4,5,1]).take(3).skipe(1));
