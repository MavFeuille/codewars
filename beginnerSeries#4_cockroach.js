const cockroachSpeed = s => {
  // Converstion rate from km/hr to cm/s
  const conversionRate = 27.777778;

  return Math.floor(s * conversionRate);
}
