const hasC = sentence => {
  sentence = sentence.toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'c') {
      return true;
    }
  }

  return false;
}

const changeLetterInSentence = sentence => {
  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === 'a') {
      result += 'b';
    } else if (letter === 'A') {
      result += 'B';
    } else {
      result += `${letter}`;
    }
  }

  return result;
}

const changeLetter = text => {
  const sentences = text.split('.');
  let result = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    if (hasC(sentence)) {
      result.push(changeLetterInSentence(sentence));
    } else {
      result.push(sentence);
    }
  }

  return result.join('.');
}
