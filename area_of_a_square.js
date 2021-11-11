const squareArea = (A) => {
  // let radius = 0;
  // let squareArea = 0;

  // //circumfrance
  // let circumfrance = 4 * A

  // circumfrance = 2 * Math.PI * radius;
  // radius = circumrance / 2 * Math.PI
  //        = 4 * A / 2 * Math.PI;
  //        = 2 * A / Math.PI

  return Number(((2 * A / Math.PI) ** 2).toFixed(2))

}

console.log(squareArea(14.05));