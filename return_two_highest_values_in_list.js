const twoHighest = arr => {
   
  if (!arr.length) return []

  let highest = arr[0];
  let secondHighest = 0;

  
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > highest) {
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }
  
  if (secondHighest === 0) {
    return [highest];
  } else {
    return [highest, secondHighest]
  }
}

console.log(twoHighest([15, 20, 20, 17]))
console.log(twoHighest([0, 15]))
console.log(twoHighest([61445,73576,37675,13561,828,70389,54739,22920,87784,61963]))