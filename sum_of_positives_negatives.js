const countPositivesSumNegatives = (input) => {
 let positiveArr = [];
 let negativeArr = [];
 let positiveSum = 0;
 let negativeSum = 0;

 for (let i = 0; i < input.length; i++) {
   if (i > 0) {
    positiveSum += i;
  }
 }
 positiveArr.push(positiveSum);
 console.log("positiveArr: ", positiveArr);

 for (let j = input.length; j = 0; j --) {
   if (j < 0) {
     negativeSum -= j;
   }
 }
 negativeArr.push(negativeSum);
 console.log("negativeArr: ", negativeArr);
 
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));