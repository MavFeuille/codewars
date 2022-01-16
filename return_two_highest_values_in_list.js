const twoHighest = arr => {
  arr.sort()
  console.log(arr)

  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > highest) {
      highest = arr[i];
    } else if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }
}

console.log(twoHighest([15, 20, 20, 17]))