const name = "Sam Harris";

const abbrevName = (name) => {
  return  name.split(" ").map((word) => word[0]).join(".");
}
console.log(abbrevName(name));