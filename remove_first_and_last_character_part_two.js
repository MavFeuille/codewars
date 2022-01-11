const array = (arr) => {
  if (arr.length < 3 || arr.length === null) {
    return null;
  } else {
   let characters = arr.split(',')
  //  console.log("🚀 ~ file: remove_first_and_last_character_part_two.js ~ line 6 ~ array ~ characters", characters)
   characters.shift();
   characters.pop();
  //  console.log(characters.join(' '));
    return characters.join(' ');
  }
}

console.log(array('1,2,3,4,5'));
console.log(array(''));
console.log(array('1'));
console.log(array('1, 2'));
