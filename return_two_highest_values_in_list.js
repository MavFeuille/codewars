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
console.log(twoHighest([41794,48095,90885,59064,89934,62691,14785,2326,51237,92543,64047,27668,68260,46518,49374,50159,83410,46105,85782,62606,32392,7395,94831,24997,17772,32507,42186,39381,86643,60135,18870,45721]))