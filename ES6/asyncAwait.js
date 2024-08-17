// console.log("a");
// setTimeout(() => {
//   console.log("b");
// }, 3000);
// console.log("c");

async function getData() {
  let myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve("All done");
    }, 3000);
  });
  let x = await myPromise;
  console.log(x);
}
getData();
