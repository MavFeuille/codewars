const findDifference = (a, b) => {
  let aTotal ;
  let bTotal ;

  for (items of a) {
    console.log("items: ", items);
    aTotal *= items;
  }
  console.log("aTotal: ", aTotal);
}

findDifference([3, 2, 5], [1, 4, 4]);