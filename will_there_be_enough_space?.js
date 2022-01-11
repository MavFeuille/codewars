const enough = (cap, on, wait) => {
  if (cap <= on + wait) {
    return 0;
  }
}