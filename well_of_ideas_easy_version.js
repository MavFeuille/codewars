const well = (x) => {
  let countGood = x.filter(x => x === 'good').length;
  return countGood <= 0 ? "Fail!" : countGood > 2 ? "I smell a series!" : "Publish!" ;
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));