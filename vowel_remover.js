const shortcut = (string) => {
  let newString = string.split("");
  
  for (let i = 0; i < newString.length; i ++) {
    if (newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u") {
      // console.log(newString[i], true)
      newString[i]= "";
    }
    // console.log("newString in for loop: ", newString);
    // console.log(newString.join(""));
  }
  return newString.join("");

  
}
console.log(shortcut('hello'));