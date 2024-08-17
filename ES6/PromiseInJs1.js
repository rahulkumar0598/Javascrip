// console.log("a");
// setTimeout(() => {
//   console.log("b");
// }, 3000);
// console.log("c");

function getData() {
  let myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("All done");
    }, 3000);
  });
  myPromise.then((x) => {
    console.log(x);
  });
}
getData();
