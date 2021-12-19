const name = "Sam Harris";

const abbrevName = (name) => {
  return  name.split(" ").map((word) => word[0]).join(".");
  // console.log("🚀 ~ file: abbrebiate_a_two_word_name.js ~ line 5 ~ abbrevName ~ splitName", splitName)

  // let output = splitName.map((word) => word[0]).join(".")
  // return splitName
  // console.log("🚀 ~ file: abbrebiate_a_two_word_name.js ~ line 8 ~ abrevName ~ output", output)
}

console.log(abbrevName(name));