const a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
      b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

 cannonsReady = (gunners) => {
  for (prop in gunners) {
    if (gunners[prop] === 'nay') {
      return 'Shiver me timbers!'
    } else {
      return 'Fire!'
    }
  }
}

console.log(cannonsReady(a));
console.log(cannonsReady(b))
