const array = (arr) => {
  if (arr.length <= 2) {
    return null;
  } else {
    return arr.slice(1, -2);
  }
}