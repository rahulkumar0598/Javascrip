// all function work with float datatype
var a = Math.ceil(1.34); // returns only upward value
console.log(a);
// expected output: 2
var b = Math.floor(4.27); // returns only downward  value
console.log(b);

// if after point value is greater than .5 then return updward value otherwise retun lower value
var c = Math.round(25.23);
console.log(c);
var d = Math.round(25.51);
console.log(d);

// delete all decimal value
var e = Math.trunc(25.2345);
console.log(e);
