const betterThanAverage = (classPoints, yourPoints) => {
  // let newArr = [...classPoints]
  // newArr.push(yourPoints)

  // let average = newArr.reduce((a, b) => a + b) / newArr.length
  // // console.log("🚀 ~ file: how_good_are_you_really.js ~ line 6 ~ betterThanAverage ~ average", average)
  // if (yourPoints > average) {
  //   return true;
  // } else {
  //   return false;
  // }

  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));