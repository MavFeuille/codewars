const fakeBin = (x) => {
  let output = '';

  for (let i = 0; i < x.length; i++) {
    if (x[i] < '5') {
      output += '0';
    } else {
      output += '1'
    }
  }
  return output;
}

console.log(fakeBin('45385593107843568'));