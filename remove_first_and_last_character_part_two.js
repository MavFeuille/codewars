const array = (arr) => {
  if (arr.length <= 2) {
    return null;
  } else {
    return arr.slice(1, -2);
  }
}

console.log(array('1,2,3,4,5'));