const sixToast = (num) => {
  return num < 6 ? num : num - 6;
}

console.log(sixToast(6));
console.log(sixToast(17));
console.log(sixToast(3));