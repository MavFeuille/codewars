const checkForFactor = (base, factor) => {
  return base % factor === 0 ? true : false;
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(24617,3));