const sixToast = (num) => {
  if (num < 6) {
    return num;
  } else {
    return num - 6;
  }
}

console.log(sixToast(6));