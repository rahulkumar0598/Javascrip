function binarySearchRecursion(arr, num, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === num) return true;
  if (arr[mid] > num) binarySearchRecursion(arr, num, start, mid - 1);
  else binarySearchRecursion(arr, num, mid + 1, end);
}
let arr = [32, 43, 45, 56, 67, 98];
console.log(binarySearchRecursion(arr, 45, 0, arr.length - 1));
