const nthEven = (n) => {
  if (n % 2 === 0) {
    return n * 2 - 2;
  } else {
    return "Wrong value!"
  }
}

console.log(nthEven(1));