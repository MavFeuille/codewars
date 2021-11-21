const positiveSum = arr => {
  let sum = 0;

  for (item of arr) {
    if (item > 0) {
      sum += item;
    }
  }
  return sum;
}

positiveSum([1,2,3,4,5])