const updateLight = (current) => {
  return current === "red" ? "green" : current === "green" ? "yellow" : "red"; 
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));