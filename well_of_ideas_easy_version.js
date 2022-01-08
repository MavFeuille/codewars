const well = (x) => {
  let countGood = 0;

  for (const item of x) {
    if (item === 'good') {
     countGood += 1;
    }
  }

  if (countGood <= 0){
    return "Fail";
  } else if (countGood  > 2) {
    return "I smell a series!";
  } else {
    return "Publish!"
  }
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));