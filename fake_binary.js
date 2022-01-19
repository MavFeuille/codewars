const fakeBin = (x) => {
  // let output = '';

  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] < '5') {
  //     output += '0';
  //   } else {
  //     output += '1'
  //   }
  // }
  // return output;

  return x.replace(/[1234]/g, '0').replace(/[56789]/g,'1');
}

console.log(fakeBin('45385593107843568'));