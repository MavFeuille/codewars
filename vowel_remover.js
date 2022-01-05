const shortcut = (string) => {
  let newString = string.split("");
  
  for (let i = 0; i < newString.length; i ++) {
    if (newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u") {  
      newString[i]= "";
    }
  }
  return newString.join("");
}
console.log(shortcut('hello'));