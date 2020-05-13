const getAverage = (sum = 0, quantity = 0, average = 0) => {
  const userNum = prompt();
  if (userNum === '') {
    const total = `${sum}, ${quantity}, ${average}`;
    alert(total);
  }
  sum += parseInt(userNum, 10);
  quantity++;

  return getAverage(sum, quantity, sum / quantity);
}
