const countPositivesSumNegatives = (input) => {
  if (!input || input.length < 1) return [];

  let sumOfNegative =0;
  let positives = [];

  for (let item of input) {
    if (item > 0) {
      positives.push(item);
    } else {
      sumOfNegative += item;
    }
  }
  return [positives.length, sumOfNegative];
  // console.log("positives: ", positives);
  // console.log("positives.length: ", positives.length);
  // console.log("sumOfNegative: ", sumOfNegative);
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));