const countSheeps = (arrayOfSheep) => {
  let count = 0;

  for (const sheep of arrayOfSheep) {
    if (sheep) {
      count ++;
    }
  }
  return count;
}
