const encode = (timestamp, claster, type, user) => {
  let firstPart = timestamp.toString(16);
  if (firstPart.length < 2) {
    firstPart = `0${firstPart}`;
  }

  let secondPart = claster.toString(16);
  if (secondPart.length < 2) {
    secondPart = `0${secondPart}`;
  }

  let thirdPart = type.toString(16);
  if (thirdPart.length < 2) {
    thirdPart = `0${thirdPart}`;
  }

  let fourthPart = user.toString(16);
  if (fourthPart.length < 2) {
    fourthPart = `0${fourthPart}`;
  }

  return `${firstPart}${secondPart}${thirdPart}${fourthPart}`;
}
