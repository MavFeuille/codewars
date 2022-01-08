const well = (x) => {
  let countBad = 0;
  let countGood = 0;

  for (const item of x) {
    if (item === 'bad') {
      countBad += 1;
    } else {
      countGood += 1;
    }
  }
  // console.log('countBad', countBad);
  // console.log('countGood', countGood);
}

console.log(well(['bad', 'bad', 'bad']));