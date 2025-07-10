function maxChar(str) {
  str = Array.from(str.toLowerCase());

  const obj = str.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let biggest = 0;

  for (const [key, value] of Object.entries(obj)) {
    if (value > biggest) {
      biggest = value;
    }
  }
  const newObj = {};

  for (const entry in obj) {
    if (obj[entry] === biggest) {
      newObj[entry] = obj[entry];
    }
  }

  return newObj;
}

maxChar("SSfdfdssfsdfsfsdfsdfsdfsdfaaaaaaaaaafdsbfgnntyutiki");
