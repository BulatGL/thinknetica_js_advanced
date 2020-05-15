const carryString = (text) => {
  let result = '';
  for (i = 0, j = 0; j < text.length; i++, j++) {
    if (i === 79) {
      result += `${text[j]}\n`;
      i = 0;
    } else {
      result += text[j];
    }
  }

  console.log(result);
  return;
}
