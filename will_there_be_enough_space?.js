const enough = (cap, on, wait) => {
  if (cap >= on + wait) {
    return 0;
  } else {
    return Maths.abs(cap - on - wait);
  }
}

console.log(enough(20, 5, 5));
console.log(enough(100, 60, 50));
