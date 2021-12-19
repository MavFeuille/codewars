const name = "Sam Harris";

const abbrevName = (name) => {
  return  name.split(" ").map((word) => word[0].toUpperCase()).join(".");
}
console.log(abbrevName(name));