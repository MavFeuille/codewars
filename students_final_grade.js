const finalGrade = (exams, projects) => {
  // if (exams > 90 || projects > 10) {
  //   return 100;
  // } else if (exams > 75 && projects >= 5) {
  //   return 90;
  // } else if (exams > 50 && projects >= 2) {
  //   return 75;
  // } else {
  //   return 0;
  // }

  if (exams > 90 || projects > 10) return 100;
  if (exams > 75 && projects >= 5) return 90;
  if (exams > 50 && projects >= 2) return 75;
  return 0;
}

console.log(finalGrade(100, 2));