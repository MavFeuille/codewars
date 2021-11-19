const mergeArrays = (arr1, arr2) => {
  let newArr = arr1.concat(arr2);
 
  newArr.sort((a, b) => a - b);
  return Array.from(new Set(newArr));
}
