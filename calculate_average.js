const find_average = (array) => {
  if (array.length === 0) {
    return 0;
  };

  let average = 0;
  let sum = 0;

  for (const item of array) {
    sum += item;
  }
  average = sum / array.length;
  return average;
}

console.log(find_average([1, 2, 3]));