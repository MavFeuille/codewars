const hero = (bullets, dragons) => {
  return bullets % dragons === 0 ? true : false;
}

console.log(hero(1500, 751));