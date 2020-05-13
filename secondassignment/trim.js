const removeSpaces = () => {
  const text = prompt();
  const textToArr = text.split(' ');
  let wordsWithoutSpaces = [];
  for (let i = 0; i < textToArr.length; i++) {
    if (textToArr[i] !== '') {
      wordsWithoutSpaces.push(textToArr[i]);
    }
  };

  const textWithoutSpaces = wordsWithoutSpaces.join(' ');
  console.log(textWithoutSpaces);
  return textWithoutSpaces;
}
