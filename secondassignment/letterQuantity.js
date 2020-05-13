const getLetterQuantity = word => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let vowelsQuantity = 0;
  let consonantsQuantity = 0;

  for (let i = 0; i < word.length; i++) {
    const upperLetter = word[i].toUpperCase();

    if (vowels.includes(upperLetter)) {
      vowelsQuantity++;
    } else {
      consonantsQuantity++;
    }
  };

  console.log(`Number of vowels: ${vowelsQuantity}`);
  console.log(`Number of consonants: ${consonantsQuantity}`);
}
