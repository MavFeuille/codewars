const cockroachSpeed = s => {
  const conversionRate = 27.777778;

  return Math.floor(s * conversionRate);
}

console.log(cockroachSpeed(0));