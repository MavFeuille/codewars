const array = (arr) => {
  if (arr.length < 5 || arr.length === null) {
    return null;
  } else {
   let characters = arr.split(',')
   characters.shift();
   characters.pop();
   return characters.join(' ');
  }
}

console.log(array('1,2,3,4,5'));
console.log("array ' ' :", array(''));
console.log(array('1'));
console.log("array 1, 2 : ", array('1, 2'));
