const betterThanAverage = (classPoints, yourPoints) => {
  let newArr = [...classPoints]
  newArr.push(yourPoints)

  let average = newArr.reduce((a, b) => a + b) / newArr.length
  // console.log("🚀 ~ file: how_good_are_you_really.js ~ line 6 ~ betterThanAverage ~ average", average)

}

console.log(betterThanAverage([2, 3], 5));