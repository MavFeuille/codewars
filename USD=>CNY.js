const usdcny = usd => {
  const rate = 6.75;
  let cny = 0;
  cny = (usd * rate);
  
  return `${cny.toFixed(2).toString()} Chinese Yuan`;
}

// console.log(usdcny(15));