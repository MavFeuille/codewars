const finalGrade = (exams, projects) => {
  // if (exams >= 90 || projects >= 10) {
  //   return 100;
  // } else if (exams >= 75 && exams < 90 && projects >=5  && projects < 10) {
  //   return 90;
  // } else if (exams >= 50 && exams < 75 && projects >= 2 && projects < 5) {
  //   return 75;
  // } else {
  //   return 0;
  // }

  return (exams >= 90 || projects >= 10) ? 100 : (exams >= 75 && exams < 90 && projects >=5  && projects < 10) ? 90 : (exams >= 50 && exams < 75 && projects >= 2 && projects < 5) ? 75 : 0 ;
  
}

console.log(finalGrade(50, 4));