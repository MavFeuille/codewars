const dutyFree = (normPrice, discount, hol) => {
  let discountPercentage = discount / 100
  return Math.floor(hol / (normPrice * discountPercentage));
}

console.log(dutyFree(12, 50, 1000));