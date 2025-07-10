function chunk(sampleArra, size) {
  const arra = [];
  for (let i = 0; i <= sampleArra.length; i += size) {
    arra.push(sampleArra.slice(i, i + size));
  }
  console.log(arra);
}

chunk([3, 34, 45, 65, 767, 6768, 688, 787, 663, 43434], 3);
