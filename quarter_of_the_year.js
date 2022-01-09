const quarterOf = (month) => {

  return month < 4 ? 1 : month > 3 && month < 7 ? 2 : month > 6 && month < 10 ? 3 : 4;

  // let quarter = 0;

  // if (month <= 3) {
  //   return quarter = 1;
  // } else if (month > 3 && month <= 6) {
  //   return quarter = 2;
  // } else if (month > 6 && month <= 9) {
  //   return quarter = 3;
  // } else {
  //   return quarter = 4;
  // }
}

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));