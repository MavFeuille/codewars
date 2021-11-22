const rentalCarCost = (d) => {
  const costPerDay = 40;
  let totalCost = 0;

  if (d >= 3 && d < 7) {
    return totalCost = d * costPerDay - 20;
  } else if (d >= 7) {
    return totalCost = d * costPerDay - 50;
  } else {
    return totalCost = d * costPerDay;
  }
}
console.log(rentalCarCost(10));