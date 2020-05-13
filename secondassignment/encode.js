const encode = (timestamp, claster, type, user) => {
  const firstPart = timestamp.toString(16);
  const secondPart = claster.toString(16);
  const thirdPart = type.toString(16);
  const fourthPart = user.toString(16);

  const encodedData = firstPart + secondPart + thirdPart + fourthPart;
  console.log(encodedData);
  return encodedData;
}
