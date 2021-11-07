function litres(time) {
  let litres = 0;
  const litreEachHalfHour = 0.5;

  litres = Math.floor(time * litreEachHalfHour);
  return litres;

}