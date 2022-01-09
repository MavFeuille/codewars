const getGrade = (s1, s2, s3) => {
  let average = (s1 + s2 + s3) / 3;
  
  return average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F' ;
  // if (average >= 90) {
  //   return 'A';
  // } else if (average >= 80) {
  //   return 'B';
  // } else if (average >= 70) {
  //   return 'C';
  // } else if (average >= 60) {
  //   return 'D';
  // } else {
  //   return 'F';
  // }
}

console.log(getGrade(100,85,96));
console.log(getGrade(89,89,90));
console.log(getGrade(60,82,76));
console.log(getGrade(66,62,68));
console.log(getGrade(58,59,60));