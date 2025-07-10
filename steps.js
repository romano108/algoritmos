function steps(n) {
  const symbol = "#";
  const spaces = " ";
  for (let i = 1; i <= n; i++) {
    let str = "";
    const repeatedSymbols = symbol.repeat(i);
    const repeatedSpace = spaces.repeat(n - i);
    str += repeatedSymbols;
    str += repeatedSpace;
    console.log(str);
  }
}

steps(4);
