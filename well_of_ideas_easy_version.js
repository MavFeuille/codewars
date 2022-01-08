const well = (x) => {
  let countGood = 0;

  for (const item of x) {
    if (item === 'good') {
     countGood += 1;
    }
  }

  if (countGood > 0)
  // console.log('countBad', countBad);
  // console.log('countGood', countGood);
}

console.log(well(['bad', 'bad', 'bad']));