// for (let key in alien) {
//   console.log(key, alien[key]);
// }
// //Print latops
// console.log(`Print latops`);
// for (let key in alien?.laptop) {
//   console.log(key, alien.laptop[key]);
// }

let obj = [
  {
    name: "Alien",
    age: "20",
  },
  {
    name: "Aliens",
    age: 34,
  },
];
for (let key in obj) {
  console.log(key, obj[key].name);
}
