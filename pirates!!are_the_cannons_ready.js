const a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
      b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

 cannonsReady = (gunners) => {
  let responsesArray = Object.values(gunners);
  if (responsesArray.includes('nay')) {
    return 'Shiver me timbers!'
  } else {
    return 'Fire!'
  }
}

console.log(cannonsReady(a));
console.log(cannonsReady(b))
