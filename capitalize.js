function capitalize(str) {
  const strArray = str.split(" ");

  return strArray
    .map((word) => {
      word = word.split("");
      const firstLetterUppercase = word.splice(0, 1)[0].toUpperCase();
      word = [firstLetterUppercase, ...word].join("");
      return word;
    })
    .join(", ")
    .replace(/,|\s+/g, " ");
}

capitalize("a short sentence my name is andoni");
