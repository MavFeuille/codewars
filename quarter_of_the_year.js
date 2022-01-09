const quarterOf = (month) => {
  let quarter = 0;

  if (month <= 3) {
    return quarter = 1;
  } else if (month > 3 && month <= 6) {
    return quarter = 2;
  } else if (month > 6 && month <= 9) {
    return quarter = 3;
  } else {
    return quarter = 4;
  }
}