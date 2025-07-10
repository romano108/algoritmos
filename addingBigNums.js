function addingNumbers(firstString, secondString) {
  const firstStringArra = firstString.split("").map((num) => parseInt(num));
  const secondStringArra = secondString.split("").map((num) => parseInt(num));
  let counter = [];
  for (let i = firstStringArra.length - 1; i >= 0; i--) {
    counter.push(firstStringArra[i] + secondStringArra[i]);
  }

  console.log(counter.reverse().join(""));
}

addingNumbers("5001", "5001");
