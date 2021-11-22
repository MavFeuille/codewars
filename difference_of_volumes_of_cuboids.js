const findDifference = (a, b) => {
 let aTotal = a.reduce((total, currentValue) => total * currentValue);
 let bTotal = b.reduce((total, currentValue) => total * currentValue);

 return Math.abs(aTotal - bTotal);
}
