const enough = (cap, on, wait) => {
  if (cap <= on + wait) {
    return 0;
  }
}

console.log(enough(10, 5, 5));