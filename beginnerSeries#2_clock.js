const past = (h, m, s) => {
  let secondToMillisecond = s * 1000;
  let minuteToMillisecond = m * 60000;
  let hourToMillisecond = h * 3600000;

  let totalMillisecond = hourToMillisecond + minuteToMillisecond + secondToMillisecond;

  return totalMillisecond;
}
