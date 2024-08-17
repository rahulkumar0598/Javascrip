function linerSearch(arr, num) {
  console.log(num);
  let len = arr.length - 1;
  for (let i = 0; i <= len; i++) {
    if (arr[i] === num) {
      return "found";
    }
  }
  console.log(len);
  return "not Found";
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(linerSearch(arr, 15));
