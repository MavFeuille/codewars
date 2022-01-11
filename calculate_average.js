const find_average = (array) => {
  if (array.length === 0) return 0;
  
  let sum = 0;
  for (const item of array) {
    sum += item;
  }
  return sum/
}

console.log(find_average([1, 2, 3]));