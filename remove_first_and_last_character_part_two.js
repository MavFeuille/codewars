const array = (arr) => {
 let characters = arr.split(',')
 characters.shift();
 characters.pop();
 
 if (characters.length) {
  return characters.join(' ');
 } else {
   return null;
 }
}

console.log(array('1,2,3,4,5'));
console.log("array ' ' :", array(''));
console.log(array('1'));
console.log("array 1, 2 : ", array('1, 2'));
