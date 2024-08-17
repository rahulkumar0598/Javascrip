// let a = undefined;

// setTimeout(() => {
//   a = "Ecma";
// }, 3000);
// console.log(a);

let a = undefined;

let Promisedata = new Promise((resolved, reject) => {
  setTimeout(() => {
    a = "ECMA hello";
    resolved("done");
  }, 3000);
});

Promisedata.then(() => {
  console.log(a);
});
