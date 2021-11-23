const getRealFloor = n => {
  return n >= 13 ? n - 2 : n > 0? n - 1 : n;
}
console.log(getRealFloor(5));