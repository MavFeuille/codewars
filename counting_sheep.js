const array1 = [
  true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

const countSheeps = (arrayOfSheep) => {
  let count = 0;

  for (const sheep of arrayOfSheep) {
    if (sheep) {
      count ++;
    }
  }
  return count;
}

// console.log(countSheeps(array1));