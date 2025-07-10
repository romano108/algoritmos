function palindrome(str) {
  str = str
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  console.log(str === str.split("").reverse().join(""));
  return str === str.split("").reverse().join("");
}

palindrome("aba");
