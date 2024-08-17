let data=[5,6,7,8];
console.log(data.push(8));
console.log(data)
console.log(data.pop())
console.log(data)
console.log(data.shift())
console.log(data)
console.log(data.unshift(45));
console.log(data)
// //remove all value after index 2
// // console.log(data.splice(2));
// //remove the value after index 2 which depends upon the value assigned after comma
// ///splice(start,delete count, replace number which you want to add to)
console.log(data.splice(2,1,235,223));
console.log(data)


