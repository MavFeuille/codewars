const updateLight = (current) => {

  return current === "red" ? "green" : current === "green" ? "yellow" : "red"; 
  // if (current === "green") {
  //   return "yellow";
  // } else if (current === "yellow") {
  //   return "red";
  // } else {
  //   return " green";
  // }
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));