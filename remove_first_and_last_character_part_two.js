const array = (arr) => {
 let characters = arr.split(',')
 characters.shift();
 characters.pop();

 return characters.length ? characters.join(' ') : null;
}

console.log(array('1,2,3,4,5'));
console.log("array ' ' :", array(''));
console.log(array('1'));
console.log("array 1, 2 : ", array('1, 2'));
