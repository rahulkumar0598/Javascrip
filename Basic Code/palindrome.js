function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] === str[len - i - 1]) {
      return "Its palindome";
    }
    return "not palidome";
  }
}
console.log(palindrome("madams"));
