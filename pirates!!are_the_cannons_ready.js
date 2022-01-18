const cannonsReady = (gunners) => {
  for (prop in gunners) {
    if (gunners[prop] === 'nay') {
      return 'Shiver me timbers!'
    } else {
      return 'Fire!'
    }
  }
}