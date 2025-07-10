function anagrams(stringA, stringB) {
  const stringADictionary = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  const stringBDictionary = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  const aDictionaryKeys = Object.keys(stringADictionary);
  const bDictionaryKeys = Object.keys(stringBDictionary);

  if (aDictionaryKeys.length !== bDictionaryKeys.length) {
    return false;
  }

  for (const key of aDictionaryKeys) {
    if (stringADictionary[key] !== stringBDictionary[key]) {
      return false;
    }
  }

  return true;
}

anagrams("abbbba", "abaccccccccccccccc");
