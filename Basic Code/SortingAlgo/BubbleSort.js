function BubbleSort(arr) {
  let isSwaped = false;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwaped = true;
      }
      if (isSwaped === false) {
        break;
      }
    }
  }
  return arr;
}
let arr = [4, 12, 54, 2, 1, 4, 65];
console.log(BubbleSort(arr));
