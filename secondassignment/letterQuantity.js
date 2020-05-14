const getLetterQuantity = word => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const consonants = ['B', "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"];
  let vowelsQuantity = 0;
  let consonantsQuantity = 0;

  for (let i = 0; i < word.length; i++) {
    const upperLetter = word[i].toUpperCase();

    if (vowels.includes(upperLetter)) {
      vowelsQuantity++;
    } else if (consonants.includes(upperLetter)) {
      consonantsQuantity++;
    }
  };

  console.log(`Number of vowels: ${vowelsQuantity}`);
  console.log(`Number of consonants: ${consonantsQuantity}`);
}
