const digitize = n => {
  
  return n.toString().split('').reverse().map(Number)
  // console.log("🚀 ~ file: convert_number_to_reversed_array_of_digits.js ~ line 4 ~ n.toString().split('').reverse().map(Number)", n.toString().split('').reverse().map(Number))
  // console.log("🚀 ~ file: convert_number_to_reversed_array_of_digits.js ~ line 4 ~  n.toString().split('').reverse()",  n.toString().split('').reverse())
  
 
  
}

console.log(digitize(348597));