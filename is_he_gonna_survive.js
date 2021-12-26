const hero = (bullets, dragons) => {
  return bullets / 2 >= dragons ? true : false;
}

console.log(hero(10, 5));