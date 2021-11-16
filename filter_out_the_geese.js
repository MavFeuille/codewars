const gooseFilter = birds => {
  geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((bird) => !geese.includes(bird));
}
