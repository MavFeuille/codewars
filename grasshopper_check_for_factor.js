const checkForFactor = (base, factor) => {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(24617,3));