function reverseString(str) {
  let len = str.length;
  let temp = "";
  for (let i = len - 1; i >= 0; i--) {
    temp = temp + str[i];
  }
  return temp;
}
console.log(reverseString("Ram"));
