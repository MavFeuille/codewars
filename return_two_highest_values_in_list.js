const twoHighest = arr => {
   
  if (!arr.length) return []

  let highest = arr[0];
  let secondHighest = 0;

  
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > highest) {
      secondHighest = highest; //move the ex-highest to the second place
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
console.log(twoHighest([37581,64431,90009,34605,18384,58710,1489,81086,22353,93642,23484,22726]))