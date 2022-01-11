const find_average = (array) => {
  let average = 0;
  let sum = 0;

  for (const item of array) {
    sum += item;
  }
  average = sum / array.length;
  return average;
}

