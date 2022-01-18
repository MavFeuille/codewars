const a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
      b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

 cannonsReady = (gunners) => {
  return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
}

console.log(cannonsReady(a));
console.log(cannonsReady(b))
