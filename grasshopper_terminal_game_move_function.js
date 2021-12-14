const move = (position, roll) => {
  return position + 2 * roll;
}

console.log(move(2, 5));