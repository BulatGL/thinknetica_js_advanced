const makeReverse = () => {
  const userWord = prompt();
  let result = '';

  for (let i = userWord.length - 1; i >= 0; i--) {
    result += userWord[i];
  }

  console.log(result);
  return result;
}
