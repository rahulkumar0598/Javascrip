let data=[5,6,7,8];
data[0]=32;
data[99]=23;
// console.log(data)
//for-of loop
// for (let n of data){
//     console.log(n)
// }

//for-in loop
for (let key in data){
    console.log(data[key]);
}