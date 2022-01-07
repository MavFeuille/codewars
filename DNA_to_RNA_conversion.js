const DNAtoRNA = (dna) => {
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("GACCGCCC"));