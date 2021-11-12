const doubleChar = str => {
  let doubleChar = "";
  for (let i = 0; i < str.length; i ++) {
    doubleChar += str[i].repeat(2);
  }
  return doubleChar;
}
