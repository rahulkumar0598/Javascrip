let a = [22, 34, 46, 67, 23];
let b = a.find((item) => item > 33);
console.log(b);
let c = a.findIndex((item) => item > 33);
console.log(c);

let d = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];
let e = d.find((item) => item.name == "a");
console.log(e);
let f = d.findIndex((item) => item.id === 1);
console.log(f);
