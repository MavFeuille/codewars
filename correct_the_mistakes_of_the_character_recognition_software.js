const correct = (string) => {
  if (string.includes(/501/g)) {
    string.replace(/501/g, "SOI")
  }
}

console.log(correct(("L0ND0N")));
