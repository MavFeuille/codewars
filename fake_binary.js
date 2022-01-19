const fakeBin = (x) => {
  return x.replace(/[1234]/g, '0').replace(/[56789]/g,'1');
}

console.log(fakeBin('45385593107843568'));