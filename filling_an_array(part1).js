// const arr = N => [ /* the numbers 0 to N-1 */ ];

const arr = N => {
  let arr = [];
 
  for (let i = 0; i < N; i ++){
    arr.push(i);
  }
  return arr;
}

console.log(arr(5));