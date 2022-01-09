const getGrade = (s1, s2, s3) => {
  let average = (s1 + s2 + s3) / 3;
  
  return average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F' ;
 
}

console.log(getGrade(100,85,96));
console.log(getGrade(89,89,90));
console.log(getGrade(60,82,76));
console.log(getGrade(66,62,68));
console.log(getGrade(58,59,60));