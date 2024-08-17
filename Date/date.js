var now = new Date();
console.log(now);
console.log(now.toDateString());

console.log(now.getDate());

console.log(now.getFullYear());

console.log(now.getMonth()); // follows zero index means Janauray-0, feb-1

console.log(now.getDay());

var dam = new Date("January 5 2010");
console.log(dam.getFullYear());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
