const smash = (words) => {
  return words.join(" ");
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
console.log(smash([]));
console.log(smash(['hello']));