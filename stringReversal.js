function stringReversal(string) {
  let mainStr = "";
  for (let i = string.split("").length - 1; i >= 0; i--) {
    mainStr += string[i];
  }
  console.log(mainStr);
}

stringReversal("Andoni");
