const enough = (cap, on, wait) => {
  return cap >= on + wait ? 0 : Math.abs(cap - on - wait);
}

console.log(enough(20, 5, 5));
console.log(enough(100, 60, 50));
