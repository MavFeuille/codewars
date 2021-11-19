const arrayPlusArray = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  let sum = 0;

  for (const item of newArr) {
    sum += item;
  }
  return sum;
}