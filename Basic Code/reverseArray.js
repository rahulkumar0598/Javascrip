function reverseArray(arr) {
  let len = arr.length - 1;
  let temp = [];
  for (let i = 0; i <= len; i++) {
    temp[i] = arr[len - i];
  }
  return temp;
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));
console.log(arr);
