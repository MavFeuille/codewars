const digitize = n => {
  return n.toString().split('').reverse().map(Number)
}

console.log(digitize(348597));