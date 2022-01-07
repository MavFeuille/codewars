const dutyFree = (normPrice, discount, hol) => {

  return Math.floor(hol / (normPrice * discountPercentage));
}

console.log(dutyFree(12, 50, 1000));