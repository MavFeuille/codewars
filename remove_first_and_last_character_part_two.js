const array = (arr) => {
  if (arr.length <= 2) {
    return null;
  } else {
   let characters = arr.split(',')
  //  console.log("🚀 ~ file: remove_first_and_last_character_part_two.js ~ line 6 ~ array ~ characters", characters)
   characters.shift();
   characters.pop();
  //  console.log(characters);
    return characters;
  }
}

console.log(array('1,2,3,4,5'));