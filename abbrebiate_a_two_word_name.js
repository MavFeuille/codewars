const name = "Sam Harris";

const abbrevName = (name) => {
  const splitName = name.split(" ");
  // console.log("🚀 ~ file: abbrebiate_a_two_word_name.js ~ line 3 ~ abrevName ~ splitName", splitName)

  let output = splitName.map((word) => word[0]).join(".")
  return 
  console.log("🚀 ~ file: abbrebiate_a_two_word_name.js ~ line 8 ~ abrevName ~ output", output)
}

console.log(abrevName(name))