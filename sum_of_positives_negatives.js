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
}
