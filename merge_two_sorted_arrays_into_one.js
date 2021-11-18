const mergeArrays = (arr1, arr2) => {
  let newArr = arr1.concat(arr2);
 
  newArr.sort((a, b) => a - b);
  return newArr;
}

console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));