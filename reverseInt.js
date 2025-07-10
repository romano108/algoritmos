function reverseInt(num) {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return num === reversed;
}
