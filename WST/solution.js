function generateIDs(count) {
  const idArray = [];

  for (let i = 0; i < count; i++) {
    if (i === 5) {
      continue;
    }
    idArray.push(`ID-${i}`);
  }
  return idArray;
}

const result = generateIDs(7);
console.log(result); 
